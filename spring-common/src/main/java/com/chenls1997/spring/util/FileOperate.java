package com.chenls1997.spring.util;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.*;
import java.util.zip.ZipEntry;
import java.util.zip.ZipOutputStream;

public class FileOperate {

	/**
	 * 按文件名读取txt文件
	 * 
	 * @param fileName
	 * @return
	 */
	public static String readTxtFileByName(String fileName) {

		FileReader fr = null;
		BufferedReader br = null;

		String path = System.getProperty("user.dir");
		String filePath = path + "\\..\\invoice_file\\" + fileName;

		try {
			fr = new FileReader(filePath);
			br = new BufferedReader(fr);

			StringBuffer sb = new StringBuffer();
			while (br.readLine() != null) {
				sb.append(br.readLine());
			}

			return sb.toString();
		} catch (Exception e) {
			e.printStackTrace();
			return "";
		} finally {
			try {
				if (br != null)
					br.close();
				if (fr != null)
					fr.close(); // 关闭文件
			} catch (Exception e) {
				e.printStackTrace();
			}
		}
	}

	/**
	 * 按文件名、内容写入txt文件
	 * 
	 * @param fileName
	 * @param content
	 */
	public static void writeTxtFile(String fileName, StringBuffer content) {

		File file = null;
		FileWriter fw = null;

		String path = System.getProperty("user.dir");
		String filePath = path + "\\..\\invoice_file\\" + fileName;
		try {
			file = new File(filePath);
			fw = new FileWriter(file);
			fw.append(content);
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			try {
				if (fw != null)
					fw.close(); // 关闭文件
			} catch (Exception e) {
				e.printStackTrace();
			}
		}
	}

	/**
	 * 按文件名、内容写入txt文件
	 * 
	 * @param fileName
	 * @param content
	 */
	public static void zipTxtFile(String txtFileName, String zipFileName, boolean isFinishDelete) {

		String path = System.getProperty("user.dir");
		String txtfilePath = path + "\\..\\invoice_file\\" + txtFileName;
		String zipfilePath = path + "\\..\\invoice_file\\" + zipFileName;
		
		byte[] buf = new byte[1024];
		try {
			ZipOutputStream out = new ZipOutputStream(new FileOutputStream(zipfilePath));

			FileInputStream in = new FileInputStream(txtfilePath);
			out.putNextEntry(new ZipEntry(txtFileName));
			int len;
			while ((len = in.read(buf)) > 0) {
				out.write(buf, 0, len);
			}
			out.closeEntry();
			in.close();
			out.close();
		} catch (IOException e) {
			e.printStackTrace();
		}
		
		if (isFinishDelete)
		{
			File file = new File(txtfilePath);
			file.delete();
		}
	}
	
	public static void download(HttpServletRequest request,
			HttpServletResponse response, String storeName, String contentType,
			String realName) throws Exception {
		response.setContentType("text/html;charset=UTF-8");
		request.setCharacterEncoding("UTF-8");
		BufferedInputStream bis = null;
		BufferedOutputStream bos = null;

		String ctxPath = request.getSession().getServletContext()
				.getRealPath("/")
				+ "uploadDir/";
		String downLoadPath = ctxPath + storeName;

		long fileLength = new File(downLoadPath).length();

		response.setContentType(contentType);
		response.setHeader("Content-disposition", "attachment; filename="
				+ new String(realName.getBytes("utf-8"), "ISO8859-1"));
		response.setHeader("Content-Length", String.valueOf(fileLength));

		bis = new BufferedInputStream(new FileInputStream(downLoadPath));
		bos = new BufferedOutputStream(response.getOutputStream());
		byte[] buff = new byte[2048];
		int bytesRead;
		while (-1 != (bytesRead = bis.read(buff, 0, buff.length))) {
			bos.write(buff, 0, bytesRead);
		}
		bis.close();
		bos.close();
	}
}
