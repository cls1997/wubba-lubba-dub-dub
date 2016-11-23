/*
Navicat MySQL Data Transfer

Source Server         : mysql
Source Server Version : 50621
Source Host           : localhost:3306
Source Database       : db

Target Server Type    : MYSQL
Target Server Version : 50621
File Encoding         : 65001

Date: 2015-05-28 10:31:33
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for x_action_node
-- ----------------------------
DROP TABLE IF EXISTS `x_action_node`;
CREATE TABLE `x_action_node` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `pid` int(10) DEFAULT NULL,
  `name` varchar(10) NOT NULL DEFAULT '""' COMMENT '导航结点名称',
  `url` varchar(255) NOT NULL DEFAULT '""',
  `level` int(1) NOT NULL COMMENT '1-一级导航,2-二级节点',
  `sort_id` int(10) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=147 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of x_action_node
-- ----------------------------
INSERT INTO `x_action_node` VALUES ('1', '0', '公告管理', '/', '1', '1');
INSERT INTO `x_action_node` VALUES ('5', '0', '停车场管理', '/', '1', '5');
INSERT INTO `x_action_node` VALUES ('6', '0', '操作员管理', '/', '1', '6');
INSERT INTO `x_action_node` VALUES ('8', '0', '系统设置', '/', '1', '9');
INSERT INTO `x_action_node` VALUES ('19', '8', '角色管理', '/admin/role', '2', '0');
INSERT INTO `x_action_node` VALUES ('88', '6', '测试页面3', '/test/test3', '2', '0');
INSERT INTO `x_action_node` VALUES ('89', '5', '测试页面1', '/test/test1', '2', '0');
INSERT INTO `x_action_node` VALUES ('90', '5', '测试页面2', '/test/test2', '2', '0');
INSERT INTO `x_action_node` VALUES ('136', '133', '测试页面4', '/test/test4', '2', '0');
INSERT INTO `x_action_node` VALUES ('143', '1', '我的公告', '/test/notice', '2', '0');
INSERT INTO `x_action_node` VALUES ('144', '1', '测试页面0', '/test/test0', '2', '0');
INSERT INTO `x_action_node` VALUES ('145', '8', '节点管理', '/admin/action_node', '2', '0');
INSERT INTO `x_action_node` VALUES ('146', '6', '操作员管理', '/admin/list', '0', '0');

-- ----------------------------
-- Table structure for x_admin
-- ----------------------------
DROP TABLE IF EXISTS `x_admin`;
CREATE TABLE `x_admin` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `account` varchar(20) DEFAULT NULL,
  `password` varchar(32) DEFAULT NULL,
  `role_id` int(10) NOT NULL DEFAULT '0',
  `head_image` varchar(255) NOT NULL DEFAULT '' COMMENT '头像',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of x_admin
-- ----------------------------
INSERT INTO `x_admin` VALUES ('1', 'admin', 'admin', '1', '');
INSERT INTO `x_admin` VALUES ('2', 'manager', '123', '2', '');
INSERT INTO `x_admin` VALUES ('3', '123456', '123456', '3', '');

-- ----------------------------
-- Table structure for x_role
-- ----------------------------
DROP TABLE IF EXISTS `x_role`;
CREATE TABLE `x_role` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `name` varchar(20) DEFAULT NULL,
  `note` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of x_role
-- ----------------------------
INSERT INTO `x_role` VALUES ('1', '超级管理员', '最高权限');
INSERT INTO `x_role` VALUES ('2', '管理员', '拥有一般权限');
INSERT INTO `x_role` VALUES ('3', '一般用户', '无');
INSERT INTO `x_role` VALUES ('4', '测试用户', '。。');

-- ----------------------------
-- Table structure for x_role_node
-- ----------------------------
DROP TABLE IF EXISTS `x_role_node`;
CREATE TABLE `x_role_node` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `role_id` int(10) NOT NULL,
  `node_id` int(10) NOT NULL,
  `add_time` int(10) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of x_role_node
-- ----------------------------
