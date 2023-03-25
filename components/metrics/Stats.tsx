import { Title, Text, Table } from '@mantine/core';

export function Metrics({ data }) {

    console.log(data.daughters[0]);

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
                <Title >432</Title>
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
                <Title style={{ "color": "red" }}>-0.31</Title>
                <Text style={{
                    fontStyle: "italic",
                    fontSize: 20
                }}>mean valence over all cams drawn</Text>
            </div>
        </div>
    );
}