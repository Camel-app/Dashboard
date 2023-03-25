import { Table, Text, Loader, Badge, Button, Alert } from '@mantine/core';
import { BsClipboardData } from "react-icons/bs";
import Link from 'next/link';
import copyToClipboard from '../../controllers/copyClipboard';
import UploadForm from '../uploadForm/UploadForm';
import getConfig from 'next/config';
const { publicRuntimeConfig } = getConfig();

const Experiments = ({ data }) => {

	const linkApi = publicRuntimeConfig.DEV_URL;

	const mapColor = {
		"active": "lime",
		"archived": "violet",
		"completed": "yellow",
		"inactive": "red"
	}


	return (
		<div style={{ paddingTop: 30, width: "80%", textAlign: "left", margin: "auto" }}>

			<Table striped highlightOnHover >
				<thead>
					<tr>
						<th>Name</th>
						<th>Date</th>
						<th>Status</th>
						<th>Collected</th>
						<th>Link for participants</th>
						<th>Data</th>
					</tr>
				</thead>
				<tbody>
					{
						data?.experiments.map(
							(element) => (
								<tr key={element.name}>
									<td>{element.name}</td>
									<td>{(new Date(element.creationDate).toLocaleDateString())}</td>
									<td><Badge variant="outline" color={mapColor[element.status]}>{element.status}</Badge></td>
									<td>{element.numberCams}</td>
									<td>
										<Button leftIcon={<BsClipboardData />} variant="subtle" onClick={() => { copyToClipboard(element._id, linkApi) }}>Copy link</Button>
									</td>
									<td>
										<Link href={"/experiment?id=" + element._id} passHref>
											<Button leftIcon={<BsClipboardData />} variant="subtle"></Button>
										</Link>
									</td>
								</tr>
							)
						)
					}
				</tbody>
			</Table>
			<UploadForm />
		</div>
	);
}


export default Experiments;
