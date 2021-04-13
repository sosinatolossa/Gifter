SELECT p.Id AS PostId, p.Title, p.Caption, p.DateCreated AS PostDateCreated, 
                        p.ImageUrl AS PostImageUrl, p.UserProfileId,
                        up.Name, up.Bio, up.Email, up.DateCreated AS UserProfileDateCreated, 
                        up.ImageUrl AS UserProfileImageUrl
                    FROM Post p 
                        LEFT JOIN UserProfile up ON p.UserProfileId = up.id
                        WHERE p.DateCreated = 6/22/2020 AND p.DateCreated > 6/22/2020;