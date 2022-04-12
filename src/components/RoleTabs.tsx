import styles from './RoleTabs.module.css';
import {useState} from 'preact/hooks'
import { MatchRoles } from '../database';

interface RoleTabsProps {
  onRoleClicked?: (role : MatchRoles) => void;
  defaultSelectedRole?: MatchRoles;
}

export default function RoleTabs (props: RoleTabsProps) {
  const [selectedRole, setSelectedRole] = useState(props.defaultSelectedRole || 'Tank')

  const onRoleClicked = (role : MatchRoles) => {
    setSelectedRole(role);
    props.onRoleClicked?.(role);
  }

  return <div className={styles.roleTabs}>
    <Tab title={MatchRoles.TANK}  onClicked={ onRoleClicked } selected={selectedRole === MatchRoles.TANK} />
    <Tab title={MatchRoles.DAMAGE} onClicked={ onRoleClicked } selected={selectedRole === MatchRoles.DAMAGE} />
    <Tab title={MatchRoles.SUPPORT} onClicked={ onRoleClicked } selected={selectedRole === MatchRoles.SUPPORT} />
  </div>
}

interface TabProps {
  title: MatchRoles
  selected?: boolean
  onClicked?: (title: MatchRoles) => void
}

function Tab(props: TabProps) {
  return <div className={styles.tab} selected={props.selected} onClick={() => props.onClicked?.(props.title)}>
    <div className={styles.tabTitle} >{props.title}</div>
  </div>
}