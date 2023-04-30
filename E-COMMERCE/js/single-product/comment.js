const commentReviewsFunciton = ()=>{
    const commentStars =document.querySelectorAll(".comment-form-rating .star");
    commentStars.forEach((item)=>{
        item.addEventListener("click",(e)=>{
            e.preventDefault();
            commentStars.forEach((element)=>{
                element.classList.remove("active")
            });
            item.classList.add("active");
        });
    });
};

const addNewCommentFunction = ()=>{
    let comments =[];
    let commentText = document.getElementById("comment-text");
    let commentName = document.getElementById("author");
    let commentButton = document.querySelector(".form-submit button");
    let commentWrapper = document.querySelector(".comment-list");

    let comText = "";
    commentText.addEventListener("input",(e)=>{
        comText =e.target.value;
    });

    let comName = "";
    commentName.addEventListener("input",(e)=>{
        comName =e.target.value;
    });

    function addComment(e){
        e.preventDefault();
        comments.push({text: comText, name:comName })
        
        let results ="";
        comments.forEach((item)=>{
            results += `
            <li class="comment-item">
                      <div class="comment-avatar">
                        <img src="img/avatars/avatar1.jpg">
                      </div>
                      <div class="comment-text">
                        <ul class="comment-star">
                          <li><i class="bi bi-star-fill"></i></li>
                          <li><i class="bi bi-star-fill"></i></li>
                          <li><i class="bi bi-star-fill"></i></li>
                          <li><i class="bi bi-star-fill"></i></li>
                          <li><i class="bi bi-star-half"></i></li>
                        </ul>
                        <div class="comment-meta">
                          <strong>${comName}</strong>
                          <span>-</span>
                          <time>April 23, 2022</time>
                        </div>
                        <div class="comment-desc">
                          <p>${comText}</p>
                        </div>
                      </div>
                    </li>
         `
        });
        commentWrapper.innerHTML = results;
        commentText.value ="";
        commentName.value ="";
    };

    commentButton.addEventListener("click",addComment)
};


export function commentFunction(){
    commentReviewsFunciton();
    addNewCommentFunction();
};

commentFunction();