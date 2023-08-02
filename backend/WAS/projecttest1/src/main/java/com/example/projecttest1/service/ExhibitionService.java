package com.example.projecttest1.service;

import com.example.projecttest1.dto.ExhibitionRequestDto;
import com.example.projecttest1.dto.ExhibitionResponseDto;
import com.example.projecttest1.entity.Exhibition;
import com.example.projecttest1.entity.Gallery;
import com.example.projecttest1.exception.exhibition.ExhibitionNotFoundException;
import com.example.projecttest1.repository.ExhibitionRepository;
import com.example.projecttest1.repository.GalleryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public class ExhibitionService {

    @Autowired
    private ExhibitionRepository exhibitionRepository;

    @Autowired
    private GalleryRepository galleryRepository;

    public Exhibition registerExhibition(ExhibitionRequestDto requestDto, String username) {
        // 검증
        Gallery gallery = galleryRepository.findByUsername(username);
        Exhibition exhibition = new Exhibition();
        exhibition.setExhibitionName(requestDto.getExhibitionName());
        exhibition.setGallery(gallery);
        exhibition.setExhibitionExplanation(exhibition.getExhibitionExplanation());
        exhibition.setPosterUrl(exhibition.getPosterUrl());
        exhibition.setCreatedAt(LocalDate.now());
        return exhibitionRepository.save(exhibition);
    }

    public Exhibition findById(Integer id) {
        return exhibitionRepository.findById(id).orElseThrow(()->new ExhibitionNotFoundException("Exhibition with id " + id + " not found"));
    }

    public List<Exhibition> selectAllExhibitions(String username) {
        Gallery gallery = galleryRepository.findByUsername(username);
        return exhibitionRepository.findAllByGallery(gallery);
    }

    public Exhibition modifyExhibition(ExhibitionRequestDto requestDto, Integer id) {

        Exhibition exhibition = findById(id);
        exhibition.setExhibitionName(requestDto.getExhibitionName());
        exhibition.setExhibitionExplanation(requestDto.getExhibitionExplanation());
        exhibition.setPosterUrl(requestDto.getPosterUrl());
        return exhibitionRepository.save(exhibition);
    }

}
