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

function createTextHTML(textContent, flat) {
  if (flat) {
    return '<div style="white-space: pre-wrap; font-size: 0.9rem; width: 36vw;">' + textContent + '</div>';
  }
  return '<div style="white-space: pre-wrap;">' + textContent + '</div>';
}


const fileContentDict = {
  '2300_131720_000016_000006': 'mr Andrews and I worked in collaboration until the night of the third.',
  '908_31957_000013_000000': 'When we met first and loved, I did not build Upon the event with marble.',
  '7176_92135_000055_000000': 'The answer to this will depend upon the length of the play, for upon the length depends the hour at which the curtain rises.',
  '7021_79740_000018_000002': 'There is a secret-something I would not have them know on any account.',
  '260_123286_000059_000002': 'The two beasts are fast locked together; I cannot distinguish the one from the other.',
  '7729_102255_000012_000011': 'The Missouri backwoods men manifested an almost incredible interest in this wonderful gun.',
  '2300_131720_000016_000006': 'mr Andrews and I worked in collaboration until the night of the third.',
  '3570_5695_000004_000002': 'The leisure class stands at the head of the social structure in point of reputability; and its manner of life and its standards of worth therefore afford the norm of reputability for the community.',
  '7176_92135_000055_000000': 'The answer to this will depend upon the length of the play, for upon the length depends the hour at which the curtain rises.',
  '3575_170457_000029_000000': '"Keswick, march twenty second eighteen thirty seven.',
  '4507_16021_000035_000009': 'It is so made, that everywhere we feel the sense of punishment.',
  '7021_79759_000004_000004': 'You have made a life-long change, if not in the very structure, at least in the permanent furnishing of her mind, and performed a work that can never by any possibility be undone.',
};

const scenarioContentDict = {
  '2300_131720_000016_000006': 'mr Andrews and I worked in collaboration until the night of the third.',
  '908_31957_000013_000000': 'When we met first and loved, I did not build Upon the event with marble.',
  '7176_92135_000055_000000': 'The answer to this will depend upon the length of the play, for upon the length depends the hour at which the curtain rises.',
  '7021_79740_000018_000002': 'There is a secret-something I would not have them know on any account.',
  '260_123286_000059_000002': 'The two beasts are fast locked together; I cannot distinguish the one from the other.',
  '7729_102255_000012_000011': 'The Missouri backwoods men manifested an almost incredible interest in this wonderful gun.',
  '2300_131720_000016_000006': 'mr Andrews and I worked in collaboration until the night of the third.',
  '3570_5695_000004_000002': 'The leisure class stands at the head of the social structure in point of reputability; and its manner of life and its standards of worth therefore afford the norm of reputability for the community.',
  '7176_92135_000055_000000': 'The answer to this will depend upon the length of the play, for upon the length depends the hour at which the curtain rises.',
  '3575_170457_000029_000000': '"Keswick, march twenty second eighteen thirty seven.',
  '4507_16021_000035_000009': 'It is so made, that everywhere we feel the sense of punishment.',
  '7021_79759_000004_000004': 'You have made a life-long change, if not in the very structure, at least in the permanent furnishing of her mind, and performed a work that can never by any possibility be undone.',
};



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
      const filename = filenames[i];
      const textContent = fileContentDict[filename] || '';  // Use empty string if filename is not found
      let cell = row.insertCell(0);
      cell.innerHTML = createTextHTML(textContent, false);
      cell.style.width = "50px";
      cell.style.textAlign = "center";


      cell = row.insertCell(1);
      cell.innerHTML = createAudioHTML(prefix +"prompt/"+filenames[i]+".wav", false);
      cell.style.textAlign = "center";

      cell = row.insertCell(2);
      cell.innerHTML = createAudioHTML(prefix +"pred_clean/ours/"+ filenames[i]+".wav", false);
      cell.style.textAlign = "center";

      cell = row.insertCell(3);
      cell.innerHTML = createAudioHTML(prefix +"baseline1/"+ filenames[i]+".wav", false);
      cell.style.textAlign = "center";

      cell = row.insertCell(4);
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



function generate_background_onesampleTable(tableId, filename, page, directory, scenarios) {
  let numPerPage = 4;
  let table = document.getElementById(tableId);
  let nrRows = table.rows.length;
  for (let i = 1; i < nrRows; i++) {
    table.deleteRow(1);
  }
  for (let i = 0; i < 4; i++) {
    let row = table.insertRow(i+1);
    row.style.height = '80px';
    if (i < scenarios.length) {
      const scenario = scenarios[i];
      let cell = row.insertCell(0);
      cell.innerHTML = createTextHTML(scenario, false);
      cell.style.width = "20px";
      cell.style.textAlign = "center";

      cell = row.insertCell(1);
      cell.innerHTML = createAudioHTML(directory+scenario+"/prompt/"+filename+".wav", false);
      cell.style.textAlign = "center";

      cell = row.insertCell(2);
      cell.innerHTML = createAudioHTML(directory+scenario+"/pred_clean/ours/"+ filename+".wav", false);
      cell.style.textAlign = "center";

      cell = row.insertCell(3);
      cell.innerHTML = createAudioHTML(directory+scenario +"/pred_same/ours/"+ filename+".wav", false);
      cell.style.textAlign = "center";

      cell = row.insertCell(4);
      cell.innerHTML = createAudioHTML(directory+scenario +"/baseline1/"+ filename+".wav", false);
      cell.style.textAlign = "center";

      if ( i > 0) {
        cell = row.insertCell(5);
        cell.innerHTML = createAudioHTML(directory+scenario +"/baseline2/"+ filename+".wav", false);
        cell.style.textAlign = "center";
      }
      else {
        cell = row.insertCell(5);
        cell.innerHTML = '/';
        cell.style.textAlign = "center";
      }
      

      cell = row.insertCell(6);
      cell.innerHTML = createAudioHTML(directory+scenario +"/baseline3/"+ filename+".wav", false);
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
      const filename = filenames[i];
      const textContent = fileContentDict[filename] || '';  // Use empty string if filename is not found
      let cell = row.insertCell(0);
      cell.innerHTML = createTextHTML(textContent, false);
      cell.style.width = "50px";
      cell.style.textAlign = "center";

      cell = row.insertCell(1);
      cell.innerHTML = createAudioHTML(prefix + scenario +"prompt_clean/"+filenames[i]+".wav", false);
      cell.style.textAlign = "center";

      cell = row.insertCell(2);
      cell.innerHTML = createAudioHTML(prefix + scenario +"prompt/"+ filenames[i]+".wav", false);
      cell.style.textAlign = "center";

      cell = row.insertCell(3);
      cell.innerHTML = createAudioHTML(prefix + scenario +"pred_clean/ours/"+ filenames[i]+".wav", false);
      cell.style.textAlign = "center";

      cell = row.insertCell(4);
      cell.innerHTML = createAudioHTML(prefix + scenario +"pred_same/ours/"+ filenames[i]+".wav", false);
      cell.style.textAlign = "center";

      cell = row.insertCell(5);
      cell.innerHTML = createAudioHTML(prefix + scenario+"baseline1/"+ filenames[i]+".wav", false);
      cell.style.textAlign = "center";

      cell = row.insertCell(6);
      cell.innerHTML = createAudioHTML(prefix + scenario+"baseline2/"+ filenames[i]+".wav", false);
      cell.style.textAlign = "center";

      cell = row.insertCell(7);
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

// filelist = ["2300_131720_000016_000006","908_31957_000013_000000","7176_92135_000055_000000"]
// generate_background_cleanTable('background-removal-cleanTable', filelist, 1, 'background_removal_preservation_samples/clean/');

// filelist = ["7021_79740_000018_000002", "260_123286_000059_000002", "7729_102255_000012_000011"]
// generate_background_allTable('background-removal-noiseTable', filelist, 1, 'background_removal_preservation_samples/','noise/');

// filelist = ["2300_131720_000016_000006","7176_92135_000055_000000"]
// generate_background_allTable('background-removal-reverbTable', filelist, 1, 'background_removal_preservation_samples/','reverb/');

// filelist =  ["","4507_16021_000035_000009","7021_79759_000004_000004"]
// generate_background_allTable('background-removal-interfereTable', filelist, 1, 'background_removal_preservation_samples/','interference/');

generate_background_onesampleTable('sample_4507_16021_000035_000009_Table',"4507_16021_000035_000009", 1, "TTS-BR-and-BP-demos/", ["clean","noise","reverb","interference"]);

generate_background_onesampleTable('sample_7176_92135_000055_000000_Table',"7176_92135_000055_000000", 1, "TTS-BR-and-BP-demos/", ["clean","noise","reverb","interference"]);

generate_background_onesampleTable('sample_7021_79759_000004_000004_Table',"7021_79759_000004_000004", 1, "TTS-BR-and-BP-demos/", ["clean","noise","reverb","interference"]);

generate_background_onesampleTable('sample_2300_131720_000016_000006_Table',"2300_131720_000016_000006", 1, "TTS-BR-and-BP-demos/", ["clean","noise","reverb","interference"]);

generate_background_onesampleTable('sample_7021_79740_000018_000002_Table',"7021_79740_000018_000002", 1, "TTS-BR-and-BP-demos/", ["clean","noise","reverb","interference"]);