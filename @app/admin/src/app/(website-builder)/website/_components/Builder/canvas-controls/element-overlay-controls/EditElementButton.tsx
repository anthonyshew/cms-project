import { DATA_LABEL } from '@cms/template-engine/constants';
import { Edit } from '@cms/ui/components/Icons';
import { Button } from '@nextui-org/react';
import DefaultTooltip from '@admin/components/DefaultTooltip';
import { BuilderState, Target } from '@admin/types';

// Opens the editing popover for the selected component
const EditElementButton = ({ target, state }: Target & BuilderState) => {
  return (
    <DefaultTooltip
      content={`Edit ${target.getAttribute(DATA_LABEL)} component`}
    >
      <Button
        color="secondary"
        variant="light"
        size="sm"
        radius="none"
        startContent={<Edit />}
        onClick={() => {
          state.setTriggerRef({ current: target });
          state.setIsOpen(true);
        }}
      >
        Edit
      </Button>
    </DefaultTooltip>
  );
};

export default EditElementButton;
