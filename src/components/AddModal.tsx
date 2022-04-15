import styles from './AddModal.module.css';
import Button from './Button';
import RoleTabs from './RoleTabs';
import InputBox from './InputBox';
import { useEffect, useState } from 'preact/hooks';
import { addMatch, lastSR, MatchRoles } from '../database';
import Icons from './Icons';

interface Props {
  show: boolean;
  onCancelClicked: () => void;
  defaultRole: MatchRoles;
}

export default function AddModal(props: Props) {
  if (!props.show) return <></>
  const [sr, setSr] = useState("");
  const [selectedRole, setSelectedRole] = useState(props.defaultRole);

  useEffect(() => {
    const fetchedLastSR = lastSR(selectedRole);
    if (fetchedLastSR === null) {
      setSr("");
      return;
    }
    setSr(fetchedLastSR.toString());
  }, [])
  const onAddClicked = () => {
    const newSR = parseInt(sr);
    if (isNaN(newSR)) {
      alert("Invalid SR");
      return;
    }
    addMatch(newSR, selectedRole);
    props.onCancelClicked();
  }
  return (
    <div className={styles.background}>
      <div className={styles.addModal}>
        <RoleTabs defaultSelectedRole={selectedRole} onRoleClicked={setSelectedRole} />

        <InputBox title='SR' onInput={setSr} value={sr} />

        <div className={styles.buttons}>
          <Button 
            title='Cancel'
            color="#f54242"
            onClick={props.onCancelClicked}
            icon={<Icons name="cancel" />}
          />
          <Button 
            title='Add'
            color="#2B92E1"
            onClick={onAddClicked}
            icon={<Icons name="add" />}
          />
        </div>
      </div>
    </div>
  )
}