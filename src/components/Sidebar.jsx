import React from "react";
import { Collapse } from "antd";
import { CaretRightFilled } from "@ant-design/icons";
import Resizable from "./Resizable";
import { categorys } from "../data";
import styles from "./sidebar.module.css";
import TreeView from "./TreeView";

const { Panel } = Collapse;

const Sidebar = () => {
	return (
		<div className={styles.sidebar}>
			<Collapse
				bordered={false}
				expandIcon={({ isActive }) => {
					return <CaretRightFilled rotate={isActive ? 90 : 0} />;
				}}
			>
				{categorys.map((category) => (
					<Panel header={category.name} key={category.id}>
						<Resizable pos="bottom" height={277} width="100%">
							<TreeView treeItems={category.children} />
						</Resizable>
					</Panel>
				))}
			</Collapse>
		</div>
	);
};

export default Sidebar;
