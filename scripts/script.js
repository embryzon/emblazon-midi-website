//sort the elements by some order idk lmao
var midis = [
    {
        title: 'Gurenge',
        fileDownload: 'gurenge.mid',
        bg: 'marenol-1.png',
        dateOrder: 0,
        artist: 'placeholder',
        noteCount: 'placeholder',
        fileSize: 'placeholder'
    },
    {
        title: 'Dororo OP',
        fileDownload: 'DororoOPBlackMidi.mid',
        bg: 'marenol-1.png',
        DateOrder: 1,
        artist: 'placeholder',
        noteCount: 'placeholder',
        fileSize: 'placeholder' 
    },
    {
        title: 'Shinzou wo Sasageyo',
        fileDownload: 'ShinzouwoSasageyoBlackMidi.mid',
        bg: 'marenol-1.png',
        dateOrder: 2,
        artist: 'placeholder',
        noteCount: 'placeholder',
        fileSize: 'placeholder'
    },
    {
        title: 'Throe',
        fileDownload: 'Throe.mid',
        bg: 'marenol-1.png',
        dateOrder: 3,
        artist: 'placeholder',
        noteCount: 'placeholder',
        fileSize:  'placeholder'
    },
    {
        title: ' ',
        fileDownload: ' ',
        bg: ' ',
        dateOrder: 25,
        artist: ' ',
        noteCount: ' ',
        fileSize:  ' '
    },
];

window.onload = loadItems(midis);

function loadItems(arr){
    div = document.getElementById('download-items');
    
    //remove all items first
    div.innerHTML = '';

    var str = '';
    for(var i = 0; i < arr.length; i++){
        var temp='';
        if (i % 3 == 0){
            temp += `<div class="row m-2">`;
        }

        temp += 
        `<div class="col-lg-4">
            <div class="card bg-black text-white mx-auto my-2">
                <div class="card-body p-2 mx-3">
                    <h5 class="song-title-${i} card-title pt-5"> ${arr[i].title} </h5>
                    <hr>
                    <p class="card-subtitle mb-2 text-light-emphasis"> 
                    Artist: ${arr[i].artist} <br>
                    Note count: ${arr[i].noteCount} <br>
                    File size: ${arr[i].fileSize} 
                    </p>
                    <a href="../MIDIs/${arr[i].fileDownload}" class="btn btn-dark mx-auto" download>Download</a>
                </div>
            </div>
        </div>`;

        if (i % 3 == 2){
            temp += `</div>`;
        }
        str += temp;
    }
    
    div.innerHTML += str;

    for (let i = 0; i < arr.length; i++){
        var title = document.querySelector(`.song-title-${i}`);
        console.log(i);
        title.style.background = 
        `linear-gradient(
            rgba(0, 0, 0, 0.7), 
            rgba(0, 0, 0, 0.95)
          ),
          url("../img/${arr[i].bg}")`; 
    }
}

     