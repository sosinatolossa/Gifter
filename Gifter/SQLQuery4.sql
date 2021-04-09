
SELECT p.Id AS PostId, p.Title, p.Caption, p.DateCreated AS PostDateCreated,
        p.ImageUrl AS PostImageUrl, p.UserProfileId AS PostUserProfileId,

        up.Name, up.Bio, up.Email, up.DateCreated AS UserProfileDateCreated,
        up.ImageUrl AS UserProfileImageUrl,

        c.Id AS CommentId, c.Message, c.UserProfileId AS CommentUserProfileId
    FROM Post p
        LEFT JOIN UserProfile up ON p.UserProfileId = up.id
        LEFT JOIN Comment c on c.PostId = p.id
ORDER BY p.DateCreated