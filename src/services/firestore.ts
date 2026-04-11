import {
  collection,
  doc,
  getDocs,
  getDoc,
  updateDoc,
  addDoc,
  query,
  where,
  orderBy,
} from 'firebase/firestore';
import { db } from '../lib/firebase';
import type { AppUser, CertificationSlug, StoredExamResult } from '../types';

// ── Users ──

export const fetchAllUsers = async (): Promise<AppUser[]> => {
  const snapshot = await getDocs(collection(db, 'users'));
  return snapshot.docs.map((d) => d.data() as AppUser);
};

export const updateUserActivation = async (uid: string, isActive: boolean): Promise<void> => {
  await updateDoc(doc(db, 'users', uid), { isActive });
};

export const updateUserCourses = async (uid: string, allowedCourses: CertificationSlug[]): Promise<void> => {
  await updateDoc(doc(db, 'users', uid), { allowedCourses });
};

export const updateUserRole = async (uid: string, role: 'admin' | 'user'): Promise<void> => {
  await updateDoc(doc(db, 'users', uid), { role });
};

export const extendUserExpiration = async (uid: string, months: number = 1): Promise<void> => {
  const userDoc = await getDoc(doc(db, 'users', uid));
  if (!userDoc.exists()) return;
  const userData = userDoc.data() as AppUser;
  const currentExpiry = new Date(userData.expiresAt);
  const now = new Date();
  const baseDate = currentExpiry > now ? currentExpiry : now;
  baseDate.setMonth(baseDate.getMonth() + months);
  await updateDoc(doc(db, 'users', uid), { expiresAt: baseDate.toISOString() });
};

// ── Exam Results ──

export const saveExamResult = async (result: Omit<StoredExamResult, 'id'>): Promise<string> => {
  const docRef = await addDoc(collection(db, 'examResults'), result);
  return docRef.id;
};

export const fetchUserExamResults = async (userId: string): Promise<StoredExamResult[]> => {
  try {
    const q = query(
      collection(db, 'examResults'),
      where('userId', '==', userId),
      orderBy('completedAt', 'desc')
    );
    const snapshot = await getDocs(q);
    return snapshot.docs.map((d) => ({ id: d.id, ...d.data() } as StoredExamResult));
  } catch {
    // Fallback: query without orderBy (composite index may not exist), sort client-side
    const q = query(
      collection(db, 'examResults'),
      where('userId', '==', userId)
    );
    const snapshot = await getDocs(q);
    const results = snapshot.docs.map((d) => ({ id: d.id, ...d.data() } as StoredExamResult));
    return results.sort((a, b) => new Date(b.completedAt).getTime() - new Date(a.completedAt).getTime());
  }
};

export const fetchExamResultById = async (resultId: string): Promise<StoredExamResult | null> => {
  const docSnap = await getDoc(doc(db, 'examResults', resultId));
  if (!docSnap.exists()) return null;
  return { id: docSnap.id, ...docSnap.data() } as StoredExamResult;
};
