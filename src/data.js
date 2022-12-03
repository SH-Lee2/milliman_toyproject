import { v4 as uuidv4 } from "uuid";
export const categorys = [
	{
		id: uuidv4(),
		name: "Category 1",
		children: [
			{
				id: uuidv4(),
				label: "Folder 1",
				type: "folder",
			},
			{
				id: uuidv4(),
				label: "Folder 2",
				type: "folder",
				children: [
					{
						id: uuidv4(),
						label: "file 1",
						type: "file",
					},
					{
						id: uuidv4(),
						label: "file 2",
						type: "file",
					},
					{
						id: uuidv4(),
						label: "file 3",
						type: "file",
					},

					{
						id: uuidv4(),
						label: "file 4",
						type: "file",
					},
					{
						id: uuidv4(),
						label: "file 5",
						type: "file",
					},
					{
						id: uuidv4(),
						label: "file 6",
						type: "file",
					},
					{
						id: uuidv4(),
						label: "file 7",
						type: "file",
					},
					{
						id: uuidv4(),
						label: "file 8",
						type: "file",
					},
					{
						id: uuidv4(),
						label: "file 9",
						type: "file",
					},
					{
						id: uuidv4(),
						label: "file 10",
						type: "file",
					},
				],
			},
		],
	},
	{
		id: uuidv4(),
		name: "Category 2",
		children: [
			{
				id: uuidv4(),
				label: "Folder 1",
				type: "folder",
			},
			{
				id: uuidv4(),
				label: "Folder 2",
				type: "folder",
				children: [
					{
						id: uuidv4(),
						label: "file 1",
						type: "file",
					},
					{
						id: uuidv4(),
						label: "file 2",
						type: "file",
					},
					{
						id: uuidv4(),
						label: "file 3",
						type: "file",
					},

					{
						id: uuidv4(),
						label: "file 4",
						type: "file",
					},
					{
						id: uuidv4(),
						label: "file 5",
						type: "file",
					},
					{
						id: uuidv4(),
						label: "file 6",
						type: "file",
					},
					{
						id: uuidv4(),
						label: "file 7",
						type: "file",
					},
					{
						id: uuidv4(),
						label: "file 8",
						type: "file",
					},
					{
						id: uuidv4(),
						label: "file 9",
						type: "file",
					},
					{
						id: uuidv4(),
						label: "file 10",
						type: "file",
					},
				],
			},
		],
	},
];
