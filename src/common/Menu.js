import DashboardIcon from '@material-ui/icons/Dashboard'
import App from 'components/App'

const Menu = () => [
  {
    name: 'Marketing',
    icon: DashboardIcon,
    path: 'marketing',
    component: App,
  },
  {
    name: 'Capacity',
    icon: DashboardIcon,
    path: 'capacity',
    component: App,
  },
  {
    name: 'Experience',
    icon: DashboardIcon,
    path: 'experience',
    component: App,
  },
  {
    name: 'Staff',
    icon: DashboardIcon,
    path: 'staff',
    component: App,
  },
  {
    name: 'Staffing',
    icon: DashboardIcon,
    path: 'staffing',
    component: App,
  },
  {
    name: 'Salaries',
    icon: DashboardIcon,
    path: 'salaries',
    component: App,
  },
  {
    name: 'Market',
    icon: DashboardIcon,
    path: 'market',
    component: App,
  },
  {
    name: 'Quality',
    icon: DashboardIcon,
    path: 'quality',
    component: App,
  },
  {
    name: 'Finances',
    icon: DashboardIcon,
    path: 'finances',
    component: App,
  },
]

export default Menu
