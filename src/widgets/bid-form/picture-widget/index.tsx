import { Stack } from '@mantine/core';
import { PicturePlaceholder } from '@/shared/ui';
import { UpdatePictureButtonUi } from './update-picture-button-ui';
import { UpdatePictureModalOpenWidget } from './update-picture-modal-open-widget';

export function PictureWidget() {
  return (
    <Stack gap={0} p={0} w={520} h={560}>
      <PicturePlaceholder />
      <UpdatePictureModalOpenWidget
        triggerComponentUi={UpdatePictureButtonUi}
      />
    </Stack>
  );
}