import json
import tkinter as tk
from tkinter import filedialog, messagebox, scrolledtext

# 전역 변수: 기준(validator) JSON 구조를 저장합니다.
validator_structure = None

def check_keys(expected, data, path=""):
    """
    expected 구조의 키가 data에 모두 존재하는지 재귀적으로 검사합니다.
    - expected가 dict이면, data도 dict여야 하며 각 키를 검사합니다.
    - expected가 리스트인 경우, 첫 요소가 dict이면 data의 리스트 각 요소에 대해 동일 구조를 검사합니다.
    반환: validator에 존재하지만 대상 파일에 누락된 키 목록 (문자열 목록)
    """
    missing = []
    
    # expected가 dict이고 data도 dict인 경우
    if isinstance(expected, dict) and isinstance(data, dict):
        for key, sub_expected in expected.items():
            current_path = f"{path}.{key}" if path else key
            if key not in data:
                missing.append(current_path)
            else:
                # 재귀 검사: dict인 경우
                if isinstance(sub_expected, dict) and isinstance(data[key], dict):
                    missing.extend(check_keys(sub_expected, data[key], current_path))
                # 배열인 경우: 첫 요소가 dict이면 각 요소 검사
                elif isinstance(sub_expected, list) and isinstance(data[key], list):
                    if sub_expected and isinstance(sub_expected[0], dict):
                        for i, item in enumerate(data[key]):
                            element_path = f"{current_path}[{i}]"
                            missing.extend(check_keys(sub_expected[0], item, element_path))
    # expected가 리스트인 경우 (전체가 배열인 경우)
    elif isinstance(expected, list) and isinstance(data, list):
        if expected and isinstance(expected[0], dict):
            for i, item in enumerate(data):
                element_path = f"{path}[{i}]" if path else f"[{i}]"
                missing.extend(check_keys(expected[0], item, element_path))
    return missing

def load_validator():
    """Validator 설정: 기준 JSON 파일을 선택하여 로드하고, 텍스트 위젯에 표시"""
    global validator_structure
    file_path = filedialog.askopenfilename(filetypes=[("JSON Files", "*.json")])
    if not file_path:
        return
    try:
        with open(file_path, "r", encoding="utf-8") as f:
            validator_structure = json.load(f)
    except Exception as e:
        messagebox.showerror("Error", f"Validator 파일 로드 실패:\n{e}")
        return
    # 텍스트 위젯에 로드한 JSON을 들여쓰기로 표시
    validator_text.delete("1.0", tk.END)
    validator_text.insert(tk.END, json.dumps(validator_structure, indent=4, ensure_ascii=False))
    status_label.config(text=f"Validator 로드 완료:\n{file_path}")

def update_validator():
    """텍스트 위젯에 있는 내용을 기준으로 validator_structure 업데이트"""
    global validator_structure
    content = validator_text.get("1.0", tk.END)
    try:
        validator_structure = json.loads(content)
    except Exception as e:
        messagebox.showerror("Error", f"입력된 내용이 올바른 JSON이 아닙니다:\n{e}")
        return
    status_label.config(text="Validator 업데이트 완료.")

def save_validator():
    """현재 validator_structure를 파일로 저장"""
    if validator_structure is None:
        messagebox.showwarning("Warning", "먼저 Validator 파일을 로드하거나 업데이트하세요.")
        return
    file_path = filedialog.asksaveasfilename(defaultextension=".json",
                                             filetypes=[("JSON Files", "*.json")])
    if not file_path:
        return
    try:
        with open(file_path, "w", encoding="utf-8") as f:
            json.dump(validator_structure, f, indent=4, ensure_ascii=False)
        status_label.config(text=f"Validator 저장 완료:\n{file_path}")
    except Exception as e:
        messagebox.showerror("Error", f"Validator 저장 실패:\n{e}")

def compare_target_file():
    """대상(Target) JSON 파일을 선택하여, 현재 validator_structure와 비교 후 누락된 키 표시"""
    if validator_structure is None:
        messagebox.showwarning("Warning", "먼저 Validator 파일을 설정하세요.")
        return
    file_path = filedialog.askopenfilename(filetypes=[("JSON Files", "*.json")])
    if not file_path:
        return
    try:
        with open(file_path, "r", encoding="utf-8") as f:
            target_data = json.load(f)
    except Exception as e:
        messagebox.showerror("Error", f"대상 JSON 파일 로드 실패:\n{e}")
        return
    missing_keys = check_keys(validator_structure, target_data)
    result = "\n".join(missing_keys) if missing_keys else "Validator에 정의된 모든 키가 대상 파일에 존재합니다."
    messagebox.showinfo("비교 결과 (누락된 키)", result)

# Tkinter GUI 구성
root = tk.Tk()
root.title("JSON Validator 설정 및 비교")
root.geometry("800x600")

# 상단 프레임: 버튼들 배치
button_frame = tk.Frame(root)
button_frame.pack(pady=10)

load_button = tk.Button(button_frame, text="Validator 설정", command=load_validator)
load_button.grid(row=0, column=0, padx=5)

update_button = tk.Button(button_frame, text="Validator 업데이트", command=update_validator)
update_button.grid(row=0, column=1, padx=5)

save_button = tk.Button(button_frame, text="Validator 저장", command=save_validator)
save_button.grid(row=0, column=2, padx=5)

compare_button = tk.Button(button_frame, text="Target 파일 비교", command=compare_target_file)
compare_button.grid(row=0, column=3, padx=5)

# 하단: Validator 내용 편집을 위한 스크롤 텍스트 위젯
validator_text = scrolledtext.ScrolledText(root, wrap=tk.WORD, width=90, height=25)
validator_text.pack(padx=10, pady=10, fill=tk.BOTH, expand=True)

# 상태 표시 레이블
status_label = tk.Label(root, text="Validator 파일이 로드되지 않았습니다.", fg="blue")
status_label.pack(pady=5)

root.mainloop()
