import { Table, Text, Loader, Badge, Button, Alert, List, ThemeIcon, createStyles } from '@mantine/core';
import { IconArrowRight } from '@tabler/icons';

import { BsClipboardData } from "react-icons/bs";
import Link from 'next/link';
import copyToClipboard from '../../controllers/copyClipboard';
import UploadForm from '../uploadForm/UploadForm';
import getConfig from 'next/config';
const { publicRuntimeConfig } = getConfig();


const useStyles = createStyles((theme) => ({
    inner: {
        //marginLeft: 100,
		paddingTop: theme.spacing.xl * 2,
		paddingBottom: theme.spacing.xl * 1,
        maxWidth: 960,
        marginRight: theme.spacing.xl * 3,

        [theme.fn.smallerThan('md')]: {
            maxWidth: '100%',
            marginRight: 0,
        }},
		
		internalLinks: {
			color: 'blue',
			textDecoration: 'underline'
		},
}));


const Experiments = ({ data }) => {
	const { classes } = useStyles();

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
			
			<div className={classes.inner}>
			Using this dashboard it is possible to: 
			<List
				mt={30}
				spacing="sm"
				size="sm"
				icon={
					<ThemeIcon size={20} radius="xl">
						<IconArrowRight size={12} stroke={1.5} />
					</ThemeIcon>
				}
			>
				<List.Item>
					Add experiment: create a CAM experiment by defining the desired parameters of your CAM study
				</List.Item>
				<List.Item>
					Copy link: send the link of your experiment directly to participants or use the link within an online-experiment 
					(add a unique participant ID to your CAMs)
				</List.Item>
				<List.Item>
					Status: set the status of your experiment (it is only possible to participate in active experiments)
				</List.Item>
			</List>
			</div>
			For detailed information  how to set up an experiment have a look in our <a key='Documentation Set Up' href='https://camtools-documentation.readthedocs.io/en/master/Set%20up%20study/#general-procedure' target='_blank'>
                                <span className={classes.internalLinks}>
                                Documentation
                                </span>
                                </a>
		</div>
	);
}


export default Experiments;
