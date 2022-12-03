import React from "react";
import Tree from "@material-ui/lab/TreeView";
import TreeItem from "@material-ui/lab/TreeItem";
import FolderIcon from "@material-ui/icons/Folder";
import FolderOpenIcon from "@material-ui/icons/FolderOpen";
import InsertDriveFileIcon from "@material-ui/icons/InsertDriveFile";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
	root: {
		height: "100%",
		width: "100%",
		minHeight: "max-content",
		background: "white",
		overflowY: "auto",
		flexGrow: 1,
		"& .MuiTreeItem-content": {
			padding: "0 16px",
			boxSizing: "border-box",
		},
		"& .MuiTreeItem-label": {
			fontSize: 10,
		},
	},
	label: {
		fontSize: 10,
	},
	folder: {
		fill: "orange",
	},
});

const getTreeItemsFromData = (treeItems) => {
	return treeItems.map((treeItemData) => {
		let children;
		if (treeItemData.children) {
			children = getTreeItemsFromData(treeItemData.children);
		}
		return (
			<TreeItem
				key={treeItemData.id}
				nodeId={treeItemData.id}
				label={treeItemData.label}
				children={children}
				icon={
					treeItemData.type === "file" && (
						<InsertDriveFileIcon style={{ fill: "skyblue" }} />
					)
				}
			/>
		);
	});
};

const TreeView = ({ treeItems }) => {
	const classes = useStyles();
	return (
		<Tree
			className={classes.root}
			defaultCollapseIcon={<FolderOpenIcon className={classes.folder} />}
			defaultExpandIcon={<FolderIcon className={classes.folder} />}
			defaultEndIcon={<FolderIcon className={classes.folder} />}
		>
			{getTreeItemsFromData(treeItems)}
		</Tree>
	);
};

export default TreeView;
