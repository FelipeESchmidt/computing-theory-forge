# Offline Mode Implementation - Summary

## Overview

This feature allows the application to work in offline mode when `VITE_INCLUDE_BACKEND=false`. All backend API calls are replaced with localStorage-based operations.

## Changes Made

### 1. Environment Configuration

- **File**: [src/utils/config.ts](src/utils/config.ts)
- Created utility functions to check if backend is enabled or offline mode is active
- `isBackendEnabled()`: Returns true if VITE_INCLUDE_BACKEND is "true"
- `isOfflineMode()`: Returns true if backend is disabled

### 2. Updated .env

- **File**: [.env](.env)
- Changed `INCLUDE_BACKEND=true` to `VITE_INCLUDE_BACKEND=true`
- Note: Vite environment variables must be prefixed with `VITE_`

### 3. localStorage Service for Offline Storage

- **File**: [src/services/offlineStorage.ts](src/services/offlineStorage.ts)
- Manages theoretical machine storage in localStorage
- Functions:
  - `getAllMachinesFromStorage()`: Retrieves all machines
  - `saveMachineToStorage()`: Saves a new machine with auto-incrementing ID
  - `updateMachineInStorage()`: Updates an existing machine
  - `deleteMachineFromStorage()`: Deletes a machine
  - `clearAllMachinesFromStorage()`: Clears all machines

### 4. Offline Authentication Service

- **File**: [src/services/offlineAuthentication.ts](src/services/offlineAuthentication.ts)
- Provides fake authentication for offline mode
- Functions:
  - `offlineLogin()`: Accepts any email/password combination, generates fake token
  - `offlineRegister()`: Simulates registration (validates input only)
  - `offlineUpdateUser()`: Simulates user update
- Generates tokens in format: `offline_<timestamp>_<random>`

### 5. Wrapped Authentication Service

- **File**: [src/services/authentication.ts](src/services/authentication.ts)
- Updated `login()`, `register()`, and `updateUser()` functions
- Checks `isBackendEnabled()` and calls offline or real authentication accordingly

### 6. Wrapped Machine Service

- **File**: [src/services/theoreticalMachines.ts](src/services/theoreticalMachines.ts)
- Updated all machine CRUD operations
- When offline:
  - `getAllMachines()`: Retrieves from localStorage
  - `saveMachine()`: Saves to localStorage
  - `updateMachine()`: Updates in localStorage
  - `deleteMachine()`: Deletes from localStorage

### 7. Token Validation Updates

- **File**: [src/utils/token/index.ts](src/utils/token/index.ts)
- Updated `tokenIsValid()` to accept offline tokens (starting with "offline\_")
- Updated `getTokenEmail()` and `getTokenName()` to return placeholder values for offline tokens
- Added `isOfflineToken()` helper function

### 8. Authentication Flow Updates

- **File**: [src/redux/Authentication/actions.ts](src/redux/Authentication/actions.ts)
- Updated `validateAlreadyLoggedIn()` action
- In offline mode, automatically generates and logs in with a fake token on app startup

### 9. Fake User Context

- **File**: [src/contexts/FakeUserProvider/index.tsx](src/contexts/FakeUserProvider/index.tsx)
- Created new context for managing offline user information
- Stores user preferences in localStorage
- Provides hooks: `useFakeUser()` and `useSetFakeUser()`

### 10. Main App Setup

- **File**: [src/main.tsx](src/main.tsx)
- Added `FakeUserProvider` wrapper around the Redux provider

## How It Works

### When `VITE_INCLUDE_BACKEND=true` (Default)

- Application works exactly as before
- All API calls go to the backend
- User authentication with real credentials
- Machines stored on backend database

### When `VITE_INCLUDE_BACKEND=false` (Offline Mode)

1. App startup: `validateAlreadyLoggedIn()` auto-logs in with fake token
2. User bypasses login page automatically
3. All operations use localStorage:
   - User authentication: Accepts any credentials
   - Machine storage: Uses browser's localStorage
   - Machine operations: CRUD operations on localStorage

## Data Persistence

- **Machines**: Stored in localStorage under key `computing_theory_machines`
- **User Info**: Stored in localStorage under key `fake_user`
- **Authentication Token**: Stored in localStorage under key `token`

## Testing the Feature

### To Enable Offline Mode:

```bash
# In .env file
VITE_INCLUDE_BACKEND=false
```

### To Enable Backend Mode:

```bash
# In .env file
VITE_INCLUDE_BACKEND=true
```

## Notes

- Offline tokens are generated with format: `offline_<timestamp>_<random>`
- localStorage has ~5-10MB limit per domain in most browsers
- Data is persisted across browser sessions until explicitly cleared
- In offline mode, email validation is minimal (any characters accepted)
- No network requests are made when in offline mode
