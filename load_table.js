function createAudioHTML(path, flat) {
  if (flat) {
    return '<audio controls controlslist="nodownload" class="px-1" style="width: 36vw;"> <source src=' +
        path +
        ' type="audio/wav">Your browser does not support the audio element.</audio>';
  }
  return '<audio controls controlslist="nodownload" class="px-1"> <source src=' +
      path +
      ' type="audio/wav">Your browser does not support the audio element.</audio>';
}

function createFigureHTML(path, flat) {
  if (flat) {
    return '<img src=' + path + ' style="width: 9vw;">';
  }
  return '<img src=' + path + '>';
}




function generate_background_cleanTable(tableId, filenames, page, scenario) {
  let numPerPage = 3;
  let table = document.getElementById(tableId);
  let nrRows = table.rows.length;
  for (let i = 1; i < nrRows; i++) {
    table.deleteRow(1);
  }
  const prefix = scenario;
  const end_idx = page * numPerPage;
  for (let i = (page - 1) * numPerPage; i < end_idx; i++) {
    let row = table.insertRow((i % numPerPage) *2 + 1);
    let row2 = table.insertRow((i % numPerPage*2) + 2);
    
    row.style.height = '80px';
    if (i < filenames.length) {
      // let cell = row.insertCell(0);
      // let reg = /[0-9]+/g;
      // cell.innerHTML = i;
      // cell.style.width = "50px"; 
      // cell.style.textAlign = "center";
      
      cell = row.insertCell(0);
      cell.innerHTML = createAudioHTML(prefix +"prompt/"+filenames[i]+".wav", false);
      cell.style.textAlign = "center";

      cell = row.insertCell(1);
      cell.innerHTML = createAudioHTML(prefix +"pred_clean/ours/"+ filenames[i]+".wav", false);
      cell.style.textAlign = "center";

      cell = row.insertCell(2);
      cell.innerHTML = createAudioHTML(prefix +"baseline1/"+ filenames[i]+".wav", false);
      cell.style.textAlign = "center";

      cell = row.insertCell(3);
      cell.innerHTML = createAudioHTML(prefix +"baseline3/"+ filenames[i]+".wav", false);
      cell.style.textAlign = "center";
    } else {
      let cell = row.insertCell(0);
      cell.innerHTML = '<br>';
      cell = row.insertCell(1);
      cell.innerHTML = '<br>';
      cell.style.textAlign = "center";
      cell = row.insertCell(2);
      cell.innerHTML = '<br>';
      cell.style.textAlign = "center";
      cell = row.insertCell(3);
      cell.innerHTML = '<br>';
      cell.style.textAlign = "center";
      cell = row.insertCell(4);
      cell.innerHTML = '<br>';
      cell.style.textAlign = "center";
      cell = row.insertCell(5);
      cell.innerHTML = '<br>';
      cell.style.textAlign = "center";
    }
  }
}





function generate_background_allTable(tableId, filenames, page, prefix_path, scenario) {
  let numPerPage = 3;
  let table = document.getElementById(tableId);
  let nrRows = table.rows.length;
  for (let i = 1; i < nrRows; i++) {
    table.deleteRow(1);
  }
  const prefix = prefix_path;
  const end_idx = page * numPerPage;
  for (let i = (page - 1) * numPerPage; i < end_idx; i++) {
    let row = table.insertRow((i % numPerPage) *2 + 1);
    let row2 = table.insertRow((i % numPerPage*2) + 2);
    
    row.style.height = '80px';
    if (i < filenames.length) {
      // let cell = row.insertCell(0);
      // let reg = /[0-9]+/g;
      // let command = filenames[i].replace(reg,"");
      // cell.innerHTML = i;
      // cell.style.width = '5px';
      // cell.style.textAlign = "center";
      

      cell = row.insertCell(0);
      cell.innerHTML = createAudioHTML(prefix + scenario +"prompt_clean/"+filenames[i]+".wav", false);
      cell.style.textAlign = "center";

      cell = row.insertCell(1);
      cell.innerHTML = createAudioHTML(prefix + scenario +"prompt/"+ filenames[i]+".wav", false);
      cell.style.textAlign = "center";

      cell = row.insertCell(2);
      cell.innerHTML = createAudioHTML(prefix + scenario +"pred_clean/ours/"+ filenames[i]+".wav", false);
      cell.style.textAlign = "center";

      cell = row.insertCell(3);
      cell.innerHTML = createAudioHTML(prefix + scenario +"pred_same/ours/"+ filenames[i]+".wav", false);
      cell.style.textAlign = "center";

      cell = row.insertCell(4);
      cell.innerHTML = createAudioHTML(prefix + scenario+"baseline1/"+ filenames[i]+".wav", false);
      cell.style.textAlign = "center";

      cell = row.insertCell(5);
      cell.innerHTML = createAudioHTML(prefix + scenario+"baseline2/"+ filenames[i]+".wav", false);
      cell.style.textAlign = "center";

      cell = row.insertCell(6);
      cell.innerHTML = createAudioHTML(prefix + scenario+"baseline3/"+ filenames[i]+".wav", false);
      cell.style.textAlign = "center";
    } else {
      let cell = row.insertCell(0);
      cell.innerHTML = '<br>';
      cell = row.insertCell(1);
      cell.innerHTML = '<br>';
      cell.style.textAlign = "center";
      cell = row.insertCell(2);
      cell.innerHTML = '<br>';
      cell.style.textAlign = "center";
      cell = row.insertCell(3);
      cell.innerHTML = '<br>';
      cell.style.textAlign = "center";
      cell = row.insertCell(4);
      cell.innerHTML = '<br>';
      cell.style.textAlign = "center";
      cell = row.insertCell(5);
      cell.innerHTML = '<br>';
      cell.style.textAlign = "center";
      cell = row.insertCell(6);
      cell.innerHTML = '<br>';
      cell.style.textAlign = "center";
      cell = row.insertCell(7);
      cell.innerHTML = '<br>';
      cell.style.textAlign = "center";
      cell = row.insertCell(8);
      cell.innerHTML = '<br>';
      cell.style.textAlign = "center";
    }
  }
}


// Background removal Task results

filelist = ["2300_131720_000016_000006","908_31957_000013_000000","7176_92135_000055_000000"]
generate_background_cleanTable('background-removal-cleanTable', filelist, 1, 'background_removal_preservation_samples/clean/');

filelist = ["7021_79740_000018_000002", "260_123286_000059_000002", "7729_102255_000012_000011"]
generate_background_allTable('background-removal-noiseTable', filelist, 1, 'background_removal_preservation_samples/','noise/');

filelist = ["2300_131720_000016_000006", "3570_5695_000004_000002","7176_92135_000055_000000"]
generate_background_allTable('background-removal-reverbTable', filelist, 1, 'background_removal_preservation_samples/','reverb/');

filelist =  ["3575_170457_000029_000000","4507_16021_000035_000009","7021_79759_000004_000004"]
generate_background_allTable('background-removal-interfereTable', filelist, 1, 'background_removal_preservation_samples/','interference/');

