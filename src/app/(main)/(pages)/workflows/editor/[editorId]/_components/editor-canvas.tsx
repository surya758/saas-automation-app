import { EditorNodeType } from "@/lib/types";
import React from "react";
import ReactFlow from "reactflow";
import "reactflow/dist/style.css";

type Props = {};

const initialNodes: EditorNodeType[] = [];
const initialEdges: { id: string; source: string; target: string }[] = [];

const EditorCanvas = (props: Props) => {
	return <div>EditorCanvas</div>;
};

export default EditorCanvas;
