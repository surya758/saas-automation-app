"use client";
import { Connection } from "@/lib/types";
import { EditorState } from "@/providers/editor-provider";
import React from "react";

type Props = {
	connection: Connection;
	state: EditorState;
};

const RenderConnectionAccordion = ({ connection, state }: Props) => {
	const { title, image, description, connectionKey, accessTokenKey, alwaysTrue, slackSpecial } =
		connection;

	return <div>RenderConnectionAccordion</div>;
};

export default RenderConnectionAccordion;
