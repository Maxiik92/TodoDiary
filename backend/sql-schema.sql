CREATE TABLE `user`(
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `login` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `password` VARCHAR(255) NOT NULL,
    `can_be_found` TINYINT(1) NOT NULL DEFAULT '1'
);
ALTER TABLE
    `user` ADD PRIMARY KEY `user_id_primary`(`id`);
CREATE TABLE `topic`(
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL
);
ALTER TABLE
    `topic` ADD PRIMARY KEY `topic_id_primary`(`id`);
CREATE TABLE `user_topic`(
    `user_id` INT NOT NULL,
    `topic_id` INT NOT NULL
);
ALTER TABLE
    `user_topic` ADD PRIMARY KEY `user_topic_user_id_primary`(`user_id`);
ALTER TABLE
    `user_topic` ADD PRIMARY KEY `user_topic_topic_id_primary`(`topic_id`);
CREATE TABLE `following`(
    `user_following_id` INT NOT NULL,
    `user_followed_id` INT NOT NULL
);
ALTER TABLE
    `following` ADD PRIMARY KEY `following_user_following_id_primary`(`user_following_id`);
ALTER TABLE
    `following` ADD PRIMARY KEY `following_user_followed_id_primary`(`user_followed_id`);
CREATE TABLE `blog`(
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
    `user_id` INT NOT NULL,
    `is_private` TINYINT(1) NOT NULL DEFAULT '0',
    `title` VARCHAR(255) NOT NULL,
    `description` VARCHAR(255) NOT NULL,
    `column` LONGTEXT NOT NULL
);
ALTER TABLE
    `blog` ADD PRIMARY KEY `blog_id_primary`(`id`);
CREATE TABLE `like`(
    `blog_id` INT NOT NULL,
    `user_id` INT NOT NULL
);
ALTER TABLE
    `like` ADD PRIMARY KEY `like_blog_id_primary`(`blog_id`);
ALTER TABLE
    `like` ADD PRIMARY KEY `like_user_id_primary`(`user_id`);
CREATE TABLE `blog_topic`(
    `blog_id` INT NOT NULL,
    `topic_id` INT NOT NULL
);
ALTER TABLE
    `blog_topic` ADD PRIMARY KEY `blog_topic_blog_id_primary`(`blog_id`);
ALTER TABLE
    `blog_topic` ADD PRIMARY KEY `blog_topic_topic_id_primary`(`topic_id`);
CREATE TABLE `task`(
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
    `user_id` INT NOT NULL,
    `title` VARCHAR(255) NOT NULL,
    `place` VARCHAR(255) NOT NULL,
    `description` VARCHAR(255) NOT NULL,
    `start_time` DATETIME NOT NULL,
    `end_time` DATETIME NOT NULL,
    `completion` TINYINT(1) NOT NULL DEFAULT '0'
);
ALTER TABLE
    `task` ADD PRIMARY KEY `task_id_primary`(`id`);
ALTER TABLE
    `task` ADD CONSTRAINT `task_user_id_foreign` FOREIGN KEY(`user_id`) REFERENCES `user`(`id`);
ALTER TABLE
    `blog` ADD CONSTRAINT `blog_user_id_foreign` FOREIGN KEY(`user_id`) REFERENCES `user`(`id`);