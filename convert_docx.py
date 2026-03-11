import zipfile
import xml.etree.ElementTree as ET
import glob
import os
import sys

def extract_text_from_docx(docx_path):
    try:
        with zipfile.ZipFile(docx_path) as docx:
            xml_content = docx.read('word/document.xml')
            tree = ET.fromstring(xml_content)
            
            # The XML namespaces
            ns = {'w': 'http://schemas.openxmlformats.org/wordprocessingml/2006/main'}
            
            text = []
            for paragraph in tree.findall('.//w:p', ns):
                texts = [node.text for node in paragraph.findall('.//w:t', ns) if node.text]
                if texts:
                    text.append(''.join(texts))
            return '\n'.join(text)
    except Exception as e:
        return f"Error extracting {docx_path}: {e}"

def main():
    if len(sys.argv) < 2:
        print("Usage: python convert_docx.py <directory>")
        return
    
    directory = sys.argv[1]
    pattern = os.path.join(directory, '*.docx')
    for docx_file in glob.glob(pattern):
        txt_file = docx_file[:-5] + '.txt'
        print(f"Converting {docx_file} -> {txt_file}")
        text = extract_text_from_docx(docx_file)
        with open(txt_file, 'w', encoding='utf-8') as f:
            f.write(text)

if __name__ == '__main__':
    main()
