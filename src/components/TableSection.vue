<template>
    <div id="table-section">
        <div id="content">
            <table class="table is-bordered is-hoverable">
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
                        <td>Action:</td>
                        <td>Action:</td>
                        <td>Action:</td>
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

table img {
  margin: auto;
}
</style>