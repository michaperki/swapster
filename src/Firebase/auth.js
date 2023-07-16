// Firebase/auth.js
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.0.2/firebase-app.js';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase';
import { getFirestore } from 'firebase/firestore';
import { getDatabase, ref, set, push } from "firebase/database";

// Function to sign up a new user
export const signUpWithEmailAndPassword = async (email, password) => {
  try {
    // is auth connected to firebase?
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    // Handle error (e.g., display error message)
    console.error('Error signing up:', error);
    throw error;
  }
};

// Function to log in an existing user
export const signInWithEmailAndPassword = async (email, password) => {
  try {
    const userCredential = await auth.signInWithEmailAndPassword(email, password);
    return userCredential.user;
  } catch (error) {
    // Handle error (e.g., display error message)
    console.error('Error signing in:', error);
    throw error;
  }
};

// Function to log out the current user
export const signOut = async () => {
  try {
    await auth.signOut();
  } catch (error) {
    // Handle error (e.g., display error message)
    console.error('Error signing out:', error);
    throw error;
  }
};

// Function to get the current user
export const getCurrentUser = () => {
  return auth.currentUser;
};

// Function to listen for changes in the authentication state (e.g., user login/logout)
export const onAuthStateChanged = (callback) => {
  return auth.onAuthStateChanged(callback);
};