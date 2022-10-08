import React, { useEffect } from "react";
import { people } from "../../data/people";
import { useDispatch } from "react-redux";
import { addPeople } from "../../redux/states/people";
import PeopleTable from "./components/PeopleTable";

const Home: React.FC = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(addPeople(people));
	}, []);

	return <PeopleTable />;
};

export default Home;
