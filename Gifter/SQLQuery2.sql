SELECT p.id, p.Title, p.Caption, p.DateCreated, p.ImageUrl, p.UserProfileId,

                       up.Name, up.Bio, up.Email, up.DateCreated AS UserProfileDateCreated,
                       up.ImageUrl AS UserProfileImageUrl, up.Id AS UserProfileId

                  FROM UserProfile up
                       LEFT JOIN Post p ON up.id = p.UserProfileId
                    where up.id = 2;

SELECT up.Name, up.Bio, up.Email, up.DateCreated AS UserProfileDateCreated,
                       up.ImageUrl AS UserProfileImageUrl, up.Id AS UserProfileId,

                       p.Id, p.Title, p.Caption, p.DateCreated AS PostDateCreated,
                       p.ImageUrl AS PostImageUrl, p.UserProfileId AS PostUserProfileId

                  FROM UserProfile up
                        JOIN Post p ON up.id = p.UserProfileId
                    where up.Id = 1;