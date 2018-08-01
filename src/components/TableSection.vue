<template>
    <div id="table-section">
        <div id="content">
            <table class="table is-bordered">
                <thead>
                    <tr>
                        <th>
                        <img class="image" src="../assets/factom.png">
                        </th>
                        <th>
                        <img class="image" src="../assets/storj.png">
                        </th>
                        <th>
                        <img class="image" src="../assets/ipfs.png">
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Action:</td>
                        <td>Action:</td>
                        <td>Action:</td>
                    </tr>
                    <tr>
                        <td>Size:</td>
                        <td>Size:</td>
                        <td>Size:</td>
                    </tr>
                    <tr>
                        <td>Cost/kb:</td>
                        <td>Cost/kb:</td>
                        <td>Cost/kb:</td>
                    </tr>
                    <tr>
                        <td>Cost associated:</td>
                        <td>Cost associated:</td>
                        <td>Cost associated:</td>
                    </tr>
                    <tr>
                        <td>Cost of Token:</td>
                        <td>Cost of Token:</td>
                    </tr>
                    <tr>
                        <td>FCT needed</td>
                        <td>STORJ needed</td>
                    </tr>
                    <tr>
                        <td>HERC needed</td>
                        <td>HERC needed</td>
                        <td>HERC needed</td>
                    </tr>
                    <tr>
                        <td>ETH Gas Price</td>
                        <td>ETH Gas Price</td>
                        <td>ETH Gas Price</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
export default {
  name: "TableSection"
};
</script>

<style scoped>
#table-section {
  padding: 50px;
}

table {
  text-align: center;
  background-color: transparent;
  margin: auto;
  border: 2px solid black;
}

table th {
  border-color: black;
}

table td {
  color: white;
  text-align: center;
  border-color: black;
}

table td:hover {
  background-color: #f3c736;
  color: black;
}

table img {
  margin: auto;
}

/*** Responsive Styles Large Desktop And Above ***/
@media all and (min-width: 1405px) {
}
/*** Responsive Styles Standard Desktop Only ***/
@media all and (min-width: 1100px) and (max-width: 1405px) {
}
/*** Responsive Styles Tablet And Below ***/
@media all and (max-width: 980px) {
}
/*** Responsive Styles Tablet Only ***/
@media all and (min-width: 768px) and (max-width: 980px) {
}
/*** Responsive Styles Smartphone Only ***/
@media all and (max-width: 767px) {
}
/*** Responsive Styles Smartphone Portrait ***/
@media all and (max-width: 479px) {
  table td{
      font-size: 12px;
  }
}
</style>