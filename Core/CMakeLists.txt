magic_add_library(Core STATIC
                  Core.h
                  Core.ixx
                  DataTypes.h
                  GUI.ixx
                  ImGui_D3D11.ixx
                  ImGui_DirectInput8.ixx
                  ImGui_User.ixx
                  Includes.h
                  Macros.h
)
SET_TARGET_PROPERTIES(Core PROPERTIES LANGUAGE CXX)
SET_TARGET_PROPERTIES(Core PROPERTIES LINKER_LANGUAGE CXX)

target_link_libraries(Core PUBLIC imgui d3d11 d3dcompiler)