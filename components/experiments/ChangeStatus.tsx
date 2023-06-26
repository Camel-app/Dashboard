import { useCookies } from "react-cookie";
import { useState } from 'react';
import { Modal, Button } from '@mantine/core';
import ChangeStatusModal from "../modals/ChangeStatusModal";
import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();


async function downloadData(props, cookie) {
    const experimentId = props.experimentId;
    let info = {
        method: 'POST',
        body: JSON.stringify({
            jwt: cookie.auth, id: experimentId
        }),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    }
    const res = await fetch(publicRuntimeConfig.DEV_URL + '/researchers/getExperimentById?id=' + experimentId, info);
    const resData = await res.json();

    // Convert object to Blob
    const blobConfig = new Blob([JSON.stringify(resData)], { type: 'text/json;charset=utf-8' })

    const blobUrl = URL.createObjectURL(blobConfig);
    const anchor = document.createElement('a');
    anchor.href = blobUrl;
    anchor.target = "_blank";
    anchor.download = experimentId + ".json";
    anchor.click();

    URL.revokeObjectURL(blobUrl);
}

const ChangeExperimentStatus = (props) => {
    const [opened, setOpened] = useState(false);
    const [cookie, setCookie] = useCookies(["auth"]);

    return (
        <>
            <Modal title="Set the activity:" opened={opened} onClose={() => setOpened(false)}>
                <ChangeStatusModal experimentId={props.experimentId} />
            </Modal>
            <div style={{ display: "flex", justifyContent: "space-around" }}>
                <Button variant="outline" onClick={() => setOpened(true)}>Change status</Button>
                <Button variant="outline" onClick={() => console.log("implement me")} style={{color: "red", borderColor: "red"}}>Delete Experiment</Button>
                <Button variant="outline" onClick={() => downloadData(props, cookie)}>Download data</Button>
            </div>
        </>
    )
}
export default ChangeExperimentStatus;