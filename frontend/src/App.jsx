import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"

import { AppLayout } from "@/layouts/app-layout"
import { DashboardPage } from "@/pages/dashboard-page"
import { HomePage } from "@/pages/home-page"
import { Login } from "./features/auth"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Default Portfolio Home / Landing Route */}
        <Route path="/" element={<HomePage />} />

        {/* Standalone Authentication Route */}
        <Route path="/login" element={<Login />} />

        {/* Application Shell Layout (Sidebar + Header + Main Content) */}
        <Route element={<AppLayout />}>
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/projects" element={<DashboardPage />} />
          <Route path="/tasks" element={<DashboardPage />} />
          <Route path="/board" element={<DashboardPage />} />
          <Route path="/calendar" element={<DashboardPage />} />
          <Route path="/team" element={<DashboardPage />} />
          <Route path="/settings" element={<DashboardPage />} />
        </Route>

        {/* Fallback Redirect */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
