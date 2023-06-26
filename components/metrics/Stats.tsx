import { Title, Text, Table } from '@mantine/core';

export function Metrics({ data }) {

    console.log("data.daughters[0]:", data.daughters[0]);


    // get all values of all nodes
    var arrayValuesNodes = [];

    console.log("data.daughters:", data.daughters);
    data.daughters.forEach(daughter => {
        //console.log("daughter", daughter)
        
        daughter.cam.nodes.forEach(element => {
            if (element.value === 10) {
                // replace 10 (ambivalent) by 0
                arrayValuesNodes.push(0);
            }else{
                arrayValuesNodes.push(element.value);
            }
        });
    });
   
    // compute sum, average
    var sumNodes = arrayValuesNodes.reduce((a, b) => a + b, 0);
    var avgNodes = (sumNodes / arrayValuesNodes.length) || 0;
    console.log(`The sum is: ${sumNodes}. The average is: ${avgNodes}.`);

    return (
        <div style={{
            display: "flex", justifyContent: "space-between",
            flexDirection: "row"
        }}>
            <div style={{
                display: "flex", justifyContent: "center",
                flexDirection: "column",
                width: 250,
                borderRadius: 5
            }}>
                <Title >{data.daughters.length}</Title>
                <Text style={{
                    fontStyle: "italic",
                    fontSize: 20
                }}>participants joined the experiment</Text>
            </div>

            <div style={{
                display: "flex", justifyContent: "center",
                flexDirection: "column",
                width: 250,
                borderRadius: 5
            }}>
                <Title >{arrayValuesNodes.length}</Title>
                <Text style={{
                    fontStyle: "italic",
                    fontSize: 20
                }}>concepts have been drawn so far</Text>
            </div>

            <div style={{
                display: "flex", justifyContent: "center",
                flexDirection: "column",
                width: 250,
                borderRadius: 5
            }}>
                <Title style={{ "color": avgNodes > 0 ? "green" : "red" }}>{avgNodes.toFixed(2)}</Title>
                <Text style={{
                    fontStyle: "italic",
                    fontSize: 20
                }}>mean valence over all cams drawn</Text>
            </div>
        </div>
    );
}


