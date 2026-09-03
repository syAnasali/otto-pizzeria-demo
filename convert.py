import re

def html_to_jsx(html_content):
    # Extract body content
    body_match = re.search(r'<body[^>]*>(.*)</body>', html_content, re.DOTALL | re.IGNORECASE)
    if not body_match:
        body_content = html_content
    else:
        body_content = body_match.group(1)

    # Basic replacements
    jsx = body_content.replace('class=', 'className=')
    jsx = jsx.replace('for=', 'htmlFor=')
    jsx = jsx.replace('tabindex=', 'tabIndex=')
    jsx = jsx.replace('stroke-width=', 'strokeWidth=')
    jsx = jsx.replace('stroke-linecap=', 'strokeLinecap=')
    jsx = jsx.replace('stroke-linejoin=', 'strokeLinejoin=')
    jsx = jsx.replace('fill-rule=', 'fillRule=')
    jsx = jsx.replace('clip-rule=', 'clipRule=')
    
    # Specific style replacements found in code
    jsx = jsx.replace('style="font-variation-settings: \'FILL\' 1;"', 'style={{ fontVariationSettings: "\\\'FILL\\\' 1" }}')
    
    # Convert HTML comments to JSX comments
    jsx = re.sub(r'<!--(.*?)-->', r'{/*\1*/}', jsx, flags=re.DOTALL)
    
    # Self-close specific tags if they aren't already (simplified)
    # This might be tricky, so let's just do <br>, <hr>, <img>, <input>
    jsx = re.sub(r'<img([^>]*?)(?<!/)>', r'<img\1 />', jsx)
    jsx = re.sub(r'<input([^>]*?)(?<!/)>', r'<input\1 />', jsx)
    jsx = re.sub(r'<br([^>]*?)(?<!/)>', r'<br\1 />', jsx)
    jsx = re.sub(r'<hr([^>]*?)(?<!/)>', r'<hr\1 />', jsx)

    # Note: SVG might have other hyphenated attributes
    
    return jsx

def convert_file(input_file, output_file, component_name):
    with open(input_file, 'r', encoding='utf-8') as f:
        html = f.read()
    
    jsx = html_to_jsx(html)
    
    react_code = f"""import React from 'react';

const {component_name} = () => {{
  return (
    <>
      {jsx}
    </>
  );
}};

export default {component_name};
"""
    
    with open(output_file, 'w', encoding='utf-8') as f:
        f.write(react_code)

convert_file('../code.html', './src/pages/Home.jsx', 'Home')
convert_file('../code1.html', './src/pages/Hotel.jsx', 'Hotel')
print("Conversion complete.")
