interface authEvent extends React.SyntheticEvent<EventTarget> {
	name: string;
	checked: boolean;
	value: string;
	firstname: string;
	lastname: string;
	password: string;
}
