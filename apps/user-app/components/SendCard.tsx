"use client"

import { Card } from "@repo/ui/card";
import { TextInput } from "@repo/ui/textinput";
import { Button } from "@repo/ui/button";
import { useState } from "react";
import { p2pTransfer } from "../app/lib/actions/p2pTransaction";
export const SendCard = () => {
    const [number, setNumber] = useState("");
    const [amount, setAmount] = useState("");
    return (
        <Card title="Send">
            <TextInput label={"Number"} placeholder={"2345679087"} onChange={(val)=>{setNumber(val)}}></TextInput>
            <TextInput label={"Amount"} placeholder={"100"} onChange={(val)=>{setAmount(val)}}></TextInput>
            <div className=" pt-5"><Button onClick={async() => { await p2pTransfer(number,Number(amount)*100) }}> Send Money</Button></div>
        </Card>

    );
}