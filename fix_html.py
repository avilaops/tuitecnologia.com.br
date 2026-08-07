import os
import re

html_files = [f for f in os.listdir('.') if f.endswith('.html')]

for file in html_files:
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()

    if '<main>' not in content and '</header>' in content and '<footer' in content:
        header_end = content.find('</header>') + len('</header>')
        footer_start = content.find('<footer')
        
        if header_end != -1 and footer_start != -1:
            new_content = content[:header_end] + '\n    <main>\n' + content[header_end:footer_start] + '    </main>\n    ' + content[footer_start:]
            content = new_content

    # Add defer to script tags
    content = re.sub(r'<script src=\"(js/[^\"]+)\"></script>', r'<script src=\"\1\" defer></script>', content)

    with open(file, 'w', encoding='utf-8') as f:
        f.write(content)

print("Processamento concluído.")
