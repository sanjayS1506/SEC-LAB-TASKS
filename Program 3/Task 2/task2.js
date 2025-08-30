  function removeDuplicates() {    
            let arr = document.getElementById("arrayInput").value
                        .split(",")
                        .map(num => Number(num.trim()));
            let uniqueArr = [...new Set(arr)];
            document.getElementById("result").textContent = "[" + uniqueArr.join(", ") + "]";
        }