<template>
    <div class="container">
        <input @keyup.enter="createTask" class="title" placeholder="What do you want to do?" autofocus v-model="title">

        <table class="table table-bordered mt-5" width="100%">
            <thead>
                <tr>
                    <td width="25%">Title</td>
                    <td width="40%">Description</td>
                    <td width="15%">Deadline</td>
                    <td width="10%">Status</td>
                    <td width="10%"></td>
                </tr>
            </thead>
            <tr>
                <td>Go to the mall</td>
                <td>Best friends come to the party</td>
                <td>12/02/2020</td>
                <td>open</td>
                <td>Delete</td>
            </tr>
            <tr>
                <td>Go to the gym</td>
                <td>Training for 6 packs</td>
                <td>03/08/2020</td>
                <td>in progress</td>
                <td>Delete</td>
            </tr>
            <tr>
                <td>Hangout with friends</td>
                <td>Improve English</td>
                <td>12/12/2020</td>
                <td>closed</td>
                <td>Delete</td>
            </tr>
            <tr>
                <td>Hangout with friends</td>
                <td>Improve English</td>
                <td>12/12/2020</td>
                <td>
                    <select class="select-status">
                        <option><div class="status" style="color: red">open</div></option>
                        <option><span class="status">in progress</span></option>
                        <option><span class="status">closed</span></option>
                    </select>
                </td>
                <td>Delete</td>
            </tr>
        </table>
    </div>
</template>

<script>
    export default {
        name: 'NewDesign',
    }
</script>

<style>
    table thead td {
        color: lightgray;
    }

    .title {
        outline: none;
        border: none;
        font-weight: 100;
        width: 100%;
        font-size: 25px;
        background-color: transparent;
    }

    .select-status {
        margin: -0.75rem;
        height: 49px;
        box-shadow: rgba(15, 15, 15, 0.05) 0px 0px 0px 1px, rgba(15, 15, 15, 0.1) 0px 3px 6px, rgba(15, 15, 15, 0.2) 0px 9px 24px;
        border-radius: 3px;
        outline: none;
        border: none;
        padding: 0.75rem;
    }

    .status {
        padding: 10px;
        background-color: rebeccapurple;
    }






    .description {
        outline: none;
        border: none;
        font-family: 'open sans',arial,sans-serif;
        font-weight: 100;
        width: 100%;
        font-size: 18px;
        background-color: transparent;
    }

    ::placeholder {
        color: rgb(180, 180, 180);
        opacity: 1; /* Firefox */
    }

    :-ms-input-placeholder { /* Internet Explorer 10-11 */
        color: rgb(180, 180, 180);
    }

    ::-ms-input-placeholder { /* Microsoft Edge */
        color: rgb(180, 180, 180);
    }



    .none {
        background-color: #a6d4fc;
    }

    .open {
        background-color: #a2e0d3;
    }

    .inprogress {
        background-color: #ffe1aa;
    }

    .closed {
        background-color: #faa7af;
    }

    a:hover {
        cursor: pointer;
    }

    .today-task {
        color: white;
        background-color: #ff2b40;
        border-radius: 100px;
        width: 25px;
        height: 25px;
        display: inline-block;
        text-align: center;
        margin-left: 5px;
    }





    /* button */
    /* .button {
        font-family: 'open sans',arial,sans-serif;
        padding: 10px 15px;
        border-radius: 5px;
        background-position: center;
        transition: background 0.8s;
    }

    .btn-create {
        background-color: #c4e9fe;
        color: #2c2834;
    }

    .btn-create:hover {
        background: #a4deff radial-gradient(circle, transparent 1%, #a4deff 1%) center/15000%;
    }

    .btn-create:active {
        background-color: #c4e9fe;
        background-size: 100%;
        transition: background 0s;
    }

    .btn-edit {
        background-color: #feefd8;
        color: #2c2834;
    }

    .btn-edit:hover {
        background: #ffddab radial-gradient(circle, transparent 1%, #ffddab 1%) center/15000%;
    }

    .btn-edit:active {
        background-color: #feefd8;
        background-size: 100%;
        transition: background 0s;
    }

    .btn-delete {
        background-color: #ffddd9;
        color: #2c2834;
    }

    .btn-delete:hover {
        background: #f8b8b1 radial-gradient(circle, transparent 1%, #f8b8b1 1%) center/15000%;
    }

    .btn-delete:active {
        background-color: #ffddd9;
        background-size: 100%;
        transition: background 0s;
    } */

    /* .open {
        width: 10px;
        height: 10px;
        border-radius: 100px;
        background-color: #6de4da;
        display: inline-block;
        margin-right: 10px;
    } */

    /* .inprogress {
        width: 10px;
        height: 10px;
        border-radius: 100px;
        background-color: #ffd28e;
        display: inline-block;
        margin-right: 10px;
    }

    .closed {
        width: 10px;
        height: 10px;
        border-radius: 100px;
        background-color: #ffa89f;
        display: inline-block;
        margin-right: 10px;
    } */

    /* .ic-form {
        width: 22px !important;
        height: 22px !important;
        color: rgb(180, 180, 180);
    } */
</style>