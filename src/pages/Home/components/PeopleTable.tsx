import React, { useEffect, useState } from "react";
import {
	DataGrid,
	GridRenderCellParams,
	GridCellParams,
} from "@mui/x-data-grid";
import { useDispatch, useSelector } from "react-redux";
import { Person } from "../../../models/people";
import { addFavorite } from "../../../redux/states/favorites";
import { RootState } from "../../../redux/store";
import { Checkbox } from "@mui/material";

const PeopleTable: React.FC = () => {
	const [selectedPeople, setselectedPeople] = useState<Person[]>([]);
	const pageSize = 5;

	const dispatch = useDispatch();

	const storePeople = useSelector((state: RootState) => state.people);
	const storeFavorite = useSelector((state: RootState) => state.favorites);

	const findFavorites = (person: Person) =>
		!!storeFavorite.find((fav) => fav.id === person.id);
	const filterFavorites = (person: Person) =>
		storeFavorite.filter((fav) => fav.id !== person.id);

	const handleChange = (person: Person) => {
		const filteredPeople = findFavorites(person)
			? filterFavorites(person)
			: [...selectedPeople, person];
		dispatch(addFavorite(filteredPeople));
	};

	const columns = [
		{
			field: "actions",
			type: "actions",
			headerName: "",
			sortable: false,
			minWidth: 50,
			renderCell: (params: GridRenderCellParams) => (
				<>
					<Checkbox
						tabIndex={-1}
						size="small"
						checked={findFavorites(params.row)}
						onChange={() => handleChange(params.row)}
					/>
				</>
			),
		},
		{
			field: "name",
			headerName: "Name",
			minWidth: 150,
			renderCell: (params: GridRenderCellParams) => <>{params.value}</>,
		},
		{
			field: "category",
			headerName: "Categories",
			flex: 1,
			renderCell: (params: GridRenderCellParams) => <>{params.value}</>,
		},
		{
			field: "company",
			headerName: "Company",
			flex: 1,
			renderCell: (params: GridRenderCellParams) => <>{params.value}</>,
		},
		{
			field: "levelOfHappiness",
			headerName: "Level of Happiness",
			flex: 1,
			renderCell: (params: GridRenderCellParams) => <>{params.value}</>,
		},
	];

	useEffect(() => {
		setselectedPeople(storeFavorite);
	}, [storeFavorite]);

	return (
		<DataGrid
			rows={storePeople}
			columns={columns}
			disableColumnSelector
			disableSelectionOnClick
			autoHeight
			pageSize={pageSize}
			rowsPerPageOptions={[pageSize]}
			getRowId={(row: any) => row.id}
		/>
	);
};

export default PeopleTable;
