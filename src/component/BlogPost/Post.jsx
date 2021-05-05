import React from 'react';

const Post  = (props) => {
    return(
        <div class="container py-1 card border-primary">
        <div class="gambar-artikel">
            <img src="http://placeimg.com/80/80/tech" alt="Gambar Tumbnail artikel"></img>
        </div>
        <div class="konten-artikel">
            <div class="judul-artikel">{props.judul}</div>
            <p class="isi-artikel">{props.isi}</p>
            <button className="btn btn-sm btn-danger" 
               onClick={() => { if (window.confirm('Apakah anda yakin menghapus artikel ini?')) props.hapusArtikel(props.idArtikel)}}>Hapus</button>
        </div>
    </div>
    )
}

export default Post;