/*
SQLyog Ultimate v11.3 (32 bit)
MySQL - 5.0.18-nt : Database - db
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
/*Table structure for table `x_action_node` */

DROP TABLE IF EXISTS `x_action_node`;

CREATE TABLE `x_action_node` (
  `id` int(10) NOT NULL auto_increment,
  `pid` int(10) default NULL,
  `name` varchar(10) NOT NULL default '""' COMMENT '导航结点名称',
  `url` varchar(255) NOT NULL default '""',
  `level` int(1) NOT NULL COMMENT '1-一级导航,2-二级节点',
  `sort_id` int(10) NOT NULL default '0',
  PRIMARY KEY  (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `x_action_node` */

insert  into `x_action_node`(`id`,`pid`,`name`,`url`,`level`,`sort_id`) values (1,0,'公告管理','/',1,1),(5,0,'停车场管理','/',1,5),(6,0,'操作员管理','/',1,6),(8,0,'系统设置','/',1,9),(19,8,'角色管理','/admin/role',2,0),(88,6,'测试页面3','/test/test3',2,0),(89,5,'测试页面1','/test/test1',2,0),(90,5,'测试页面2','/test/test2',2,0),(136,133,'测试页面4','/test/test4',2,0),(143,1,'我的公告','/test/notice',2,0),(144,1,'测试页面0','/test/test0',2,0),(145,8,'节点管理','/admin/action_node',2,0),(146,6,'操作员管理','/admin/list',0,0);

/*Table structure for table `x_admin` */

DROP TABLE IF EXISTS `x_admin`;

CREATE TABLE `x_admin` (
  `id` int(10) NOT NULL auto_increment,
  `account` varchar(20) default NULL,
  `password` varchar(32) default NULL,
  `role_id` int(10) NOT NULL default '0',
  PRIMARY KEY  (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `x_admin` */

insert  into `x_admin`(`id`,`account`,`password`,`role_id`) values (1,'admin','admin',1),(2,'manager','123',2),(3,'123456','123456',3),(4,'user000','123',3);

/*Table structure for table `x_role` */

DROP TABLE IF EXISTS `x_role`;

CREATE TABLE `x_role` (
  `id` int(10) NOT NULL auto_increment,
  `name` varchar(20) default NULL,
  `note` varchar(30) default NULL,
  PRIMARY KEY  (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `x_role` */

insert  into `x_role`(`id`,`name`,`note`) values (1,'超级管理员','最高权限'),(2,'管理员','拥有一般权限'),(3,'一般用户','无'),(4,'测试用户','。。');

/*Table structure for table `x_role_node` */

DROP TABLE IF EXISTS `x_role_node`;

CREATE TABLE `x_role_node` (
  `id` int(10) NOT NULL auto_increment,
  `role_id` int(10) NOT NULL,
  `node_id` int(10) NOT NULL,
  `add_time` int(10) NOT NULL default '0',
  PRIMARY KEY  (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `x_role_node` */

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
