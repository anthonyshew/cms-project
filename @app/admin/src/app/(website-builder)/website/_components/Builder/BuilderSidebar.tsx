'use client';
import useBuilderProviderState from '@admin/hooks/useBuilderProviderState';
import { Card, CardContent, CardHeader } from '@cms/ui/components/Card';
import StyleControls from './canvas-controls/StyleControls';
import PurgeStylesButton from './canvas-controls/PurgeStylesButton';

const BuilderSidebar = () => {
  const { selectedComponent, styles } = useBuilderProviderState();

  return (
    <>
      <div className="bg-white p-4 w-full">
        {/* <code>
          <pre>{JSON.stringify(styles, null, 2)}</pre>
        </code> */}

        {selectedComponent ? (
          <StyleControls />
        ) : (
          <Card className="text-center mb-4">
            <CardHeader className="p-4">
              <p className="font-bold">No Selection</p>
            </CardHeader>
            <CardContent className="p-4">
              <p>Select an element on the canvas to activate this panel</p>
            </CardContent>
          </Card>
        )}

        <div className="flex [&>*]:flex-1">
          <PurgeStylesButton />
        </div>
      </div>
    </>
  );
};

export default BuilderSidebar;
