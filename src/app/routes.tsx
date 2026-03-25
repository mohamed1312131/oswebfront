import { createBrowserRouter } from 'react-router';
import Home from './Home';
import Solution from './pages/Solution';
import TeacherApp from './pages/TeacherApp';
import ParentApp from './pages/ParentApp';
import AssistantDashboard from './pages/AssistantDashboard';
import ManagerDashboard from './pages/ManagerDashboard';
import About from './pages/About';
import BookDemo from './pages/BookDemo';
import Contact from './pages/Contact';
import AdminLogin from './pages/AdminLogin';
import AdminAnalytics from './pages/AdminAnalytics';
import ProtectedRoute from './components/ProtectedRoute';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Home,
  },
  {
    path: '/solution',
    Component: Solution,
  },
  {
    path: '/app/teacher',
    Component: TeacherApp,
  },
  {
    path: '/app/parent',
    Component: ParentApp,
  },
  {
    path: '/app/assistant',
    Component: AssistantDashboard,
  },
  {
    path: '/app/manager',
    Component: ManagerDashboard,
  },
  {
    path: '/about',
    Component: About,
  },
  {
    path: '/book-demo',
    Component: BookDemo,
  },
  {
    path: '/contact',
    Component: Contact,
  },
  {
    path: '/admin/login',
    Component: AdminLogin,
  },
  {
    path: '/admin/analytics',
    element: (
      <ProtectedRoute>
        <AdminAnalytics />
      </ProtectedRoute>
    ),
  },
  {
    path: '*',
    Component: Home,
  },
]);