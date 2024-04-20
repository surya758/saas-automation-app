import { EditorCanvasCardType } from "@/lib/types";
import { useEditor } from "@/providers/editor-provider";
import React, { useMemo } from "react";
import { Position, useNodeId } from "reactflow";
import EditorCanvasIconHelper from "./editor-canvas-card-icon-helper";
import CustomHandle from "./custom-handle";

type Props = {
	data: EditorCanvasCardType;
};

const EditorCanvasCardSingle = ({ data }: Props) => {
	const { dispatch, state } = useEditor();
	const nodeId = useNodeId();
	const logo = useMemo(() => {
		return <EditorCanvasIconHelper type={data.type} />;
	}, [data]);
	return (
		<>
			{data.type !== "Trigger" && data.type !== "Google Drive" && (
				<CustomHandle type='target' position={Position.Top} style={{ zIndex: 100 }} />
			)}
		</>
	);
};

export default EditorCanvasCardSingle;
