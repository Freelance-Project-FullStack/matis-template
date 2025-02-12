// assets
import { DashboardOutlined, UserOutlined, CodeSandboxOutlined, FontColorsOutlined } from '@ant-design/icons';
// icons
const icons = {
  DashboardOutlined,
  UserOutlined,
  CodeSandboxOutlined,
  FontColorsOutlined
};

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const dashboard = {
  id: 'group-dashboard',
  title: 'Admin',
  type: 'group',
  children: [
    {
      id: 'dashboard',
      title: 'Dashboard',
      type: 'item',
      url: '/dashboard/default',
      icon: icons.DashboardOutlined,
      breadcrumbs: false
    },
    {
      id: 'users',
      title: 'Users',
      type: 'item',
      url: '/dashboard/user',
      icon: icons.UserOutlined,
      breadcrumbs: false
    },
    {
      id: 'course',
      title: 'Course',
      type: 'item',
      url: '/dashboard/course',
      icon: icons.CodeSandboxOutlined,
      breadcrumbs: false
    },
    {
      id: 'font',
      title: 'Font',
      type: 'item',
      url: '/dashboard/font',
      icon: icons.FontColorsOutlined,
      breadcrumbs: false
    }
  ]
};

export default dashboard;
