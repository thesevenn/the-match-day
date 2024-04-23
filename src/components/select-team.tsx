import {FC} from "react";

interface propType {}
const SelectTeam: FC<propType> = () => {
	return (
		<section className="select-league w-full h-screen flex justify-center items-center">
			<div>
				<div>
					<div className="selected-league">
						<img src="" alt="" className="league-logo" />
						<h2 className="capitalize">select your team</h2>
					</div>
					<div></div>
				</div>
				<div></div>
			</div>
		</section>
	);
};

export default SelectTeam;
