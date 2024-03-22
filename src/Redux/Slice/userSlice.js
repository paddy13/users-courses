import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk('fetchUsers', async () => {
  const response = await fetch('https://pre.bistrainer.com/v1/index.cfm?action=testapi.users')
  return await response.json()
})

export const fetchUsersCourses = createAsyncThunk('fetchUsersCourses', async (id) => {
  const response = await fetch(`https://pre.bistrainer.com/v1/index.cfm?action=testapi.courses&id=${id}`)
  return await response.json()
})

const userSlice = createSlice({
  name: 'users',
  initialState: {
    isLoading: false,
    users: null,
    selectedUser: []
  },
  reducers: (create) => ({
    sortUsers: create.reducer((state, action) => {
      if(action.payload === 'descending') {
        state.users.sort((a, b) => b.name.localeCompare(a.name));
      } else if(action.payload === 'ascending') {
        state.users.sort((a, b) => a.name.localeCompare(b.name));
      }
    }),
    updateUser: create.reducer((state, action) => {
      const index = state.users.findIndex((user) => user.id === action.payload.id)
      state.users.splice(index, 1, action.payload)
    }),
  }),
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.users = action.payload.users
      state.isLoading = false
    })
    builder.addCase(fetchUsers.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(fetchUsersCourses.fulfilled, (state, action) => {
      state.selectedUser = action.payload.classes
      state.isLoading = false
    })
    builder.addCase(fetchUsersCourses.pending, (state) => {
      state.isLoading = true
    })
  }
})

export default userSlice.reducer

export const { sortUsers, updateUser } = userSlice.actions
