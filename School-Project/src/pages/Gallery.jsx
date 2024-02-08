import React from "react";
import Masonry from "react-responsive-masonry";

function Gallery() {
  // Array of Placeholder Images
  const images = [
    "https://images.unsplash.com/photo-1611526114392-8d8e229f511d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGJhdG1hbnxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1588862081167-d5b98006637e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJhdG1hbnxlbnwwfHwwfHx8MA%3D%3D",
    "https://media.istockphoto.com/id/1392622018/photo/close-up-studio-portrait-of-24-year-old-woman.jpg?s=612x612&w=0&k=20&c=9OFrYp_1HQvzOliWDfOVMfSVGFrQQS9BkmQuzes6hUg=",
    "https://images.unsplash.com/photo-1608501078713-8e445a709b39?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2FsbHBhcGVyJTIwNGt8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1531259683007-016a7b628fc3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmF0bWFufGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmF0bWFufGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1588860939994-ce4f7a537f03?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmF0bWFufGVufDB8fDB8fHww",
    "https://media.istockphoto.com/id/1392622018/photo/close-up-studio-portrait-of-24-year-old-woman.jpg?s=612x612&w=0&k=20&c=9OFrYp_1HQvzOliWDfOVMfSVGFrQQS9BkmQuzes6hUg=",
    "https://images.unsplash.com/photo-1608501078713-8e445a709b39?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2FsbHBhcGVyJTIwNGt8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmF0bWFufGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1588860939994-ce4f7a537f03?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmF0bWFufGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1611526114392-8d8e229f511d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGJhdG1hbnxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1608501078713-8e445a709b39?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2FsbHBhcGVyJTIwNGt8ZW58MHx8MHx8fDA%3D",
  ];

  return (
    <Masonry columnsCount={3} gutter="10px">
      {images.map((image, i) => (
        <img key={i} src={image} style={{ width: "100%", display: "block" }} />
      ))}
    </Masonry>
  );
}
export default Gallery;
