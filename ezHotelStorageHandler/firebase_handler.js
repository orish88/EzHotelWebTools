console.log("***firebase handler called***");
var config = {
    apiKey: "AIzaSyCMQkUdrshrN6ucwiO0JdMtNlqDgdw7UyM",
    authDomain: "ezhotel-adb0d.firebaseapp.com",
    databaseURL: "https://ezhotel-adb0d.firebaseio.com",
    projectId: "ezhotel-adb0d",
    storageBucket: "ezhotel-adb0d.appspot.com",
    messagingSenderId: "889498084939"
};
firebase.initializeApp(config);


var defaultStorage = firebase.storage();
var defaultDatabase = firebase.database();
defaultDatabase.ref().child('test').set("test result2");



// Check for the various File API support.
if (window.File && window.FileReader && window.FileList && window.Blob) {
    console.log("Great success! All the File APIs are supported.");
} else {
    alert('The File APIs are not fully supported in this browser.');
}
var files;
function handleFileSelect(evt) {
    files = evt.target.files; // FileList object

    // files is a FileList of File objects. List some properties.
    var output = [];
    for (var i = 0, f; f = files[i]; i++) {
        output.push('<li><strong>', escape(f.name), '</strong> (', f.type || 'n/a', ') - ',
            f.size, ' bytes, last modified: ',
            f.lastModifiedDate ? f.lastModifiedDate.toLocaleDateString() : 'n/a',
            '</li>');
    }
    document.getElementById('list').innerHTML = '<ul>' + output.join('') + '</ul>';
}

document.getElementById('files').addEventListener('change', handleFileSelect, false);


var btUpload = document.getElementById("bt_upload");

btUpload.addEventListener('click', () => {
    console.log("upload called");
    var ref = defaultStorage.ref();
    if(files != null){
        console.log("files not null");

        for (var i = 0, f; f = files[i]; i++) {
            console.log("upload file: "+f.name);
            // var file = ... // use the Blob or File API
            ref.child(f.name).put(f).then(function(snapshot) {
              var result = 'Succesfully Uploaded a file: '+snapshot.ref +' \n download link: '+snapshot.downloadURL;  
              console.log(result);
              alert(result);
            });
        }
    }

});

// var showFilesList = document.getElementById("show_files_list");
// var btShowFiles = document.getElementById("bt_show_files");
// btShowFiles.addEventListener('click',()=>{
//     console.log("show files called");
//     showFilesList.innerHTML = '';
//     var ref = defaultStorage.ref();
//     showOutput = Object.keys(ref);

//     showFilesList.innerHTML = '<ul>'+ showOutput.join('') +'</ul>';


// });



